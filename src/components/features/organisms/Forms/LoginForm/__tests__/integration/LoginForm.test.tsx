import '@testing-library/jest-dom';

import { render } from '@test/setupTests';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginForm } from '../../LoginForm';

// Mock at module level with proper typing
jest.mock('@store/me/hooks', () => ({
  useLogin: jest.fn(),
}));

const mockUseLogin = jest.requireMock('@store/me/hooks').useLogin;

describe('LoginForm - Integration Test', () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseLogin.mockReturnValue({
      login: mockLogin,
      loginLoading: false,
    });

    // Mock focus if needed
    Object.defineProperty(window.HTMLElement.prototype, 'focus', {
      configurable: true,
      writable: true,
      value: jest.fn(),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const setup = () => {
    render(<LoginForm />);

    return {
      user: userEvent.setup(),
    };
  };

  it('should disable submit button on first render', async () => {
    setup();
    expect(screen.getByTestId('loginFormButton')).toBeDisabled();
  });

  it('should disable submit button when form is invalid', async () => {
    setup(); // no async/await needed now

    const emailInput = screen.getByTestId('emailInput');
    const passwordInput = screen.getByTestId('passwordInput');
    const submitBtn = screen.getByTestId('loginFormButton');

    // synchronously change + blur email
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.blur(emailInput);

    // synchronously change + blur password
    fireEvent.change(passwordInput, { target: { value: 'sdf' } });
    fireEvent.blur(passwordInput);

    // inputs have the right values

    await waitFor(() => {
      expect(emailInput).toHaveValue('not-an-email');
      expect(passwordInput).toHaveValue('sdf');

      // and because both fields are dirty/invalid, the button stays disabled
      expect(submitBtn).toBeDisabled();
    });
  });

  it('lets you type email & password and updates the inputs', async () => {
    setup();

    // Grab the real inputs by their test-ids
    const emailInput = screen.getByTestId('emailInput');
    const passwordInput = screen.getByTestId('passwordInput');

    // Type into email, then blur so Formik registers it
    fireEvent.change(emailInput, { target: { value: 'foo@bar.com' } });
    fireEvent.blur(emailInput);

    // Wait for Formik to re-render with that new value
    await waitFor(() => {
      expect(emailInput).toHaveValue('foo@bar.com');
    });

    // Same for password
    fireEvent.change(passwordInput, { target: { value: 'hunter2' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(passwordInput).toHaveValue('hunter2');
    });
  });

  it('should submit with valid data and handle success', async () => {
    mockLogin.mockResolvedValue({ success: true });

    setup();

    const emailInput = screen.getByTestId('emailInput');
    const passwordInput = screen.getByTestId('passwordInput');
    const submitBtn = screen.getByTestId('loginFormButton');

    fireEvent.change(emailInput, { target: { value: 'foo@bar.com' } });
    fireEvent.blur(emailInput);

    // Same for password
    fireEvent.change(passwordInput, { target: { value: 'somevalidpassword' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(submitBtn).not.toBeDisabled();

      // finally you can click it
    });

    fireEvent.click(submitBtn);
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('foo@bar.com', 'somevalidpassword');
    });
  });

  it('should show general error when login fails', async () => {
    const errorMsg = 'Invalid credentials';

    mockLogin.mockResolvedValue({
      success: false,
      errors: [{ message: errorMsg }],
    });

    setup();

    const emailInput = screen.getByTestId('emailInput');
    const passwordInput = screen.getByTestId('passwordInput');
    const submitBtn = screen.getByTestId('loginFormButton');

    fireEvent.change(emailInput, { target: { value: 'foo@bar.com' } });
    fireEvent.blur(emailInput);

    // Same for password
    fireEvent.change(passwordInput, { target: { value: 'invalidpass' } });
    fireEvent.blur(passwordInput);

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(errorMsg)).toBeInTheDocument();
    });
  });
  //
  it('should clear general error when email input is focused', async () => {
    const errorMsg = 'Server error';

    mockLogin.mockResolvedValue({
      success: false,
      errors: [{ message: errorMsg }],
    });

    setup();

    fireEvent.click(screen.getByTestId('loginFormButton'));

    fireEvent.click(screen.getByTestId('emailInput'));
    await waitFor(() => {
      expect(screen.queryByText(errorMsg)).not.toBeInTheDocument();
    });
  });
});
