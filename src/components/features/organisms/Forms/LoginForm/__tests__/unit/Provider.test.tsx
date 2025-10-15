import { extractErrorMessage } from '@shared/utils';
import { useLogin } from '@store/me/hooks';
import { act, renderHook } from '@testing-library/react';
import { useFormik } from 'formik';

import { initialValues, loginSchema } from '../../login.schema';
import { LoginFormProvider, useLoginFormContext } from '../../Provider';

// Mock dependencies
jest.mock('@store/me/hooks');
jest.mock('@shared/utils');
jest.mock('formik');

const mockUseLogin = useLogin as jest.MockedFunction<typeof useLogin>;
const mockExtractErrorMessage = extractErrorMessage as jest.MockedFunction<
  typeof extractErrorMessage
>;
const mockUseFormik = useFormik as jest.MockedFunction<typeof useFormik>;

describe('LoginForm Provider - Unit Tests', () => {
  const mockLogin = jest.fn();
  const mockFormikReturn = {
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    handleSubmit: jest.fn(),
    setFieldError: jest.fn(),
    setFieldValue: jest.fn(),
    resetForm: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();

    mockUseLogin.mockReturnValue({
      login: mockLogin,
      loginLoading: false,
    });

    mockUseFormik.mockReturnValue(mockFormikReturn as any);
    mockExtractErrorMessage.mockReturnValue('Default error message');
  });

  const renderHookWithProvider = () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoginFormProvider>{children}</LoginFormProvider>
    );

    return renderHook(() => useLoginFormContext(), { wrapper });
  };

  describe('Initial State', () => {
    it('should initialize generalError as empty string', () => {
      const { result } = renderHookWithProvider();

      expect(result.current.generalError).toBe('');
    });

    it('should initialize showPassword as false', () => {
      const { result } = renderHookWithProvider();

      expect(result.current.showPassword).toBe(false);
    });

    it('should initialize isSubmitting correctly when both formik and login are not loading', () => {
      const { result } = renderHookWithProvider();

      expect(result.current.isSubmitting).toBe(false);
    });

    it('should setup formik with correct parameters', () => {
      renderHookWithProvider();

      expect(mockUseFormik).toHaveBeenCalledWith({
        initialValues,
        onSubmit: expect.any(Function),
        validationSchema: loginSchema,
      });
    });
  });

  describe('toggleShowPassword', () => {
    it('should toggle showPassword from false to true', () => {
      const { result } = renderHookWithProvider();

      act(() => {
        result.current.toggleShowPassword();
      });

      expect(result.current.showPassword).toBe(true);
    });

    it('should toggle showPassword from true to false', () => {
      const { result } = renderHookWithProvider();

      // First toggle to true
      act(() => {
        result.current.toggleShowPassword();
      });

      // Then toggle back to false
      act(() => {
        result.current.toggleShowPassword();
      });

      expect(result.current.showPassword).toBe(false);
    });
  });

  describe('resetGeneralError', () => {
    it('should reset generalError to empty string', async () => {
      const { result } = renderHookWithProvider();

      // Set an error first by triggering failed login
      mockLogin.mockResolvedValueOnce({
        success: false,
        errors: ['Login failed'],
      });

      const handleSubmit = mockUseFormik.mock.calls[0][0].onSubmit;

      await act(async () => {
        await handleSubmit({ email: 'test@test.com', password: 'password' }, {} as any);
      });

      // Verify error is set
      expect(result.current.generalError).toBe('Default error message');

      // Reset error
      act(() => {
        result.current.resetGeneralError();
      });

      expect(result.current.generalError).toBe('');
    });
  });

  describe('isSubmitting calculation', () => {
    it('should return true when formik.isSubmitting is true', () => {
      mockUseFormik.mockReturnValue({
        ...mockFormikReturn,
        isSubmitting: true,
      } as any);

      const { result } = renderHookWithProvider();

      expect(result.current.isSubmitting).toBe(true);
    });

    it('should return true when loginLoading is true', () => {
      mockUseLogin.mockReturnValue({
        login: mockLogin,
        loginLoading: true,
      });

      const { result } = renderHookWithProvider();

      expect(result.current.isSubmitting).toBe(true);
    });

    it('should return true when both formik.isSubmitting and loginLoading are true', () => {
      mockUseFormik.mockReturnValue({
        ...mockFormikReturn,
        isSubmitting: true,
      } as any);

      mockUseLogin.mockReturnValue({
        login: mockLogin,
        loginLoading: true,
      });

      const { result } = renderHookWithProvider();

      expect(result.current.isSubmitting).toBe(true);
    });

    it('should return false when both formik.isSubmitting and loginLoading are false', () => {
      mockUseFormik.mockReturnValue({
        ...mockFormikReturn,
        isSubmitting: false,
      } as any);

      mockUseLogin.mockReturnValue({
        login: mockLogin,
        loginLoading: false,
      });

      const { result } = renderHookWithProvider();

      expect(result.current.isSubmitting).toBe(false);
    });
  });

  describe('handleSubmit', () => {
    it('should call login with correct email and password', async () => {
      renderHookWithProvider();

      mockLogin.mockResolvedValueOnce({
        success: true,
        errors: null,
      });

      const handleSubmit = mockUseFormik.mock.calls[0][0].onSubmit;

      await act(async () => {
        await handleSubmit({ email: 'test@example.com', password: 'password123' }, {} as any);
      });

      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
    });

    it('should reset generalError before login attempt', async () => {
      const { result } = renderHookWithProvider();

      // First set an error
      mockLogin.mockResolvedValueOnce({
        success: false,
        errors: ['First error'],
      });

      const handleSubmit = mockUseFormik.mock.calls[0][0].onSubmit;

      await act(async () => {
        await handleSubmit({ email: 'test@test.com', password: 'wrong' }, {} as any);
      });

      expect(result.current.generalError).toBe('Default error message');

      // Second attempt should reset error first
      mockLogin.mockResolvedValueOnce({
        success: true,
        errors: null,
      });

      await act(async () => {
        await handleSubmit({ email: 'test@test.com', password: 'correct' }, {} as any);
      });

      expect(result.current.generalError).toBe('');
    });

    it('should set generalError when login fails', async () => {
      const { result } = renderHookWithProvider();

      mockLogin.mockResolvedValueOnce({
        success: false,
        errors: ['Invalid credentials'],
      });

      mockExtractErrorMessage.mockReturnValue('Invalid credentials');

      const handleSubmit = mockUseFormik.mock.calls[0][0].onSubmit;

      await act(async () => {
        await handleSubmit({ email: 'test@test.com', password: 'wrong' }, {} as any);
      });

      expect(mockExtractErrorMessage).toHaveBeenCalledWith(['Invalid credentials']);
      expect(result.current.generalError).toBe('Invalid credentials');
    });

    it('should not set generalError when login succeeds', async () => {
      const { result } = renderHookWithProvider();

      mockLogin.mockResolvedValueOnce({
        success: true,
        errors: null,
      });

      const handleSubmit = mockUseFormik.mock.calls[0][0].onSubmit;

      await act(async () => {
        await handleSubmit({ email: 'test@test.com', password: 'correct' }, {} as any);
      });

      expect(result.current.generalError).toBe('');
    });

    it('should set generalError when login throws Error instance', async () => {
      const { result } = renderHookWithProvider();

      const errorMessage = 'Network connection failed';

      mockLogin.mockRejectedValueOnce(new Error(errorMessage));

      const handleSubmit = mockUseFormik.mock.calls[0][0].onSubmit;

      await act(async () => {
        await handleSubmit({ email: 'test@test.com', password: 'password' }, {} as any);
      });

      expect(result.current.generalError).toBe(errorMessage);
    });

    it('should not set generalError when login throws non-Error', async () => {
      const { result } = renderHookWithProvider();

      mockLogin.mockRejectedValueOnce('String error');

      const handleSubmit = mockUseFormik.mock.calls[0][0].onSubmit;

      await act(async () => {
        await handleSubmit({ email: 'test@test.com', password: 'password' }, {} as any);
      });

      expect(result.current.generalError).toBe('');
    });
  });

  describe('Context Provider', () => {
    it('should provide all required context values', () => {
      const { result } = renderHookWithProvider();

      expect(result.current).toHaveProperty('generalError');
      expect(result.current).toHaveProperty('isSubmitting');
      expect(result.current).toHaveProperty('formik');
      expect(result.current).toHaveProperty('resetGeneralError');
      expect(result.current).toHaveProperty('showPassword');
      expect(result.current).toHaveProperty('toggleShowPassword');
    });

    it('should provide functions with correct types', () => {
      const { result } = renderHookWithProvider();

      expect(typeof result.current.resetGeneralError).toBe('function');
      expect(typeof result.current.toggleShowPassword).toBe('function');
    });

    it('should throw error when useLoginFormContext is called outside provider', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        renderHook(() => useLoginFormContext());
      }).toThrow();

      console.error = originalError;
    });
  });
});
