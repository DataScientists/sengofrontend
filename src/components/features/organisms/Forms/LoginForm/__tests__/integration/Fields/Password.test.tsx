import '@testing-library/jest-dom';

import { render } from '@test/setupTests';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PasswordInput } from '../../../Fields';

// Mock dependencies
jest.mock('../../../Provider', () => ({
  ...jest.requireActual('../../../Provider'),
  useLoginFormContext: jest.fn(),
}));

jest.mock('@shared/utils', () => ({
  getFormFieldError: jest.fn(),
}));

const mockUseLoginFormContext = jest.requireMock('../../../Provider').useLoginFormContext;
const mockGetFormFieldError = jest.requireMock('@shared/utils').getFormFieldError;

describe('<passwordInput />', () => {
  const resetGeneralError = jest.fn();
  const handleChange = jest.fn();
  const handleBlur = jest.fn();
  const toggleShowPassword = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseLoginFormContext.mockReturnValue({
      formik: {
        values: { password: '' },
        errors: {},
        touched: {},
        handleChange,
        handleBlur,
      },
      resetGeneralError,
      generalError: '',
      isSubmitting: false,
      showPassword: false,
      toggleShowPassword,
    });
    mockGetFormFieldError.mockReturnValue('');
  });

  // Helper to override mock values
  const setup = (overrides = {}) => {
    mockUseLoginFormContext.mockReturnValue({
      ...mockUseLoginFormContext(),
      ...overrides,
    });

    return {
      user: userEvent.setup(),
      ...render(<PasswordInput />),
    };
  };

  it('renders with correct attributes', () => {
    setup();

    const input = screen.getByTestId('passwordInput');

    expect(input).toHaveAttribute('id', 'password');
    expect(input).toHaveAttribute('autoComplete', 'off');
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByTestId('iconButton')).toBeInTheDocument();
  });

  it('handles user interactions', async () => {
    const { user } = setup();

    const input = screen.getByTestId('passwordInput');

    await user.type(input, 'dsdf');
    expect(handleChange).toHaveBeenCalled();

    await user.tab(); // Triggers blur
    expect(handleBlur).toHaveBeenCalled();

    // await user.click(input); // Triggers focus
    // expect(resetGeneralError).toHaveBeenCalled();
  });

  it('does not show error when field is untouched', () => {
    setup({
      formik: {
        values: { password: '' },
        errors: { password: '' },
        touched: { password: false },
        handleChange,
        handleBlur,
      },
    });

    expect(screen.queryByText('Invalid password')).not.toBeInTheDocument();
    expect(screen.getByTestId('passwordInput')).not.toHaveAttribute('aria-invalid');
  });
  it('shows error message when field is touched and invalid', () => {
    // Mock the error message
    mockGetFormFieldError.mockReturnValue('Invalid password');

    setup({
      formik: {
        values: { password: 'bad@password' },
        errors: { password: 'Invalid password' },
        touched: { password: true },
        handleChange,
        handleBlur,
      },
    });

    // Verify error message appears
    expect(screen.getByText('Invalid password')).toBeInTheDocument();

    // Verify input is marked as invalid
    const input = screen.getByTestId('passwordInput');

    expect(input).toHaveAttribute('aria-invalid', 'true');

    // Verify the field container has invalid state
    const fieldContainer = input.closest('[data-invalid]');

    expect(fieldContainer).toHaveAttribute('data-invalid');
  });

  it('calls toggleShowPassword when eye icon is clicked', async () => {
    const { user } = setup();

    const input = screen.getByTestId('passwordInput');

    expect(input).toHaveAttribute('type', 'password');

    const iconButton = screen.getByTestId('iconButton');

    await user.click(iconButton);
    expect(toggleShowPassword).toHaveBeenCalledTimes(1);
  });

  it('renders the input as text when showPassword is true', () => {
    setup({ showPassword: true });

    const input = screen.getByTestId('passwordInput');

    expect(input).toHaveAttribute('type', 'text');
  });
});
