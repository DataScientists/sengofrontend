import '@testing-library/jest-dom';

import { render, screen } from '@test/setupTests';
import userEvent from '@testing-library/user-event';

import { PasswordInputField } from './PasswordInputField';

// Mock shared utils
jest.mock('@shared/utils', () => ({
  getFormFieldError: jest.fn(),
}));

const mockGetFormFieldError = jest.requireMock('@shared/utils').getFormFieldError;

describe('<PasswordInputField />', () => {
  const handleChange = jest.fn();
  const handleBlur = jest.fn();
  const handleFocus = jest.fn();
  const toggleShowPassword = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockGetFormFieldError.mockReturnValue('');
  });

  const setup = (overrides = {}) => {
    const props = {
      id: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Your password...',
      dataTestId: 'passwordInput',
      value: '',
      error: '',
      touched: false,
      onChange: handleChange,
      onBlur: handleBlur,
      onFocus: handleFocus,
      showPassword: false,
      toggleShowPassword,
      autoFocus: false,
      ...overrides,
    };

    return {
      user: userEvent.setup(),
      ...render(<PasswordInputField {...props} />),
    };
  };

  it('renders input with correct props', () => {
    setup();

    const input = screen.getByTestId('passwordInput');

    expect(input).toHaveAttribute('id', 'password');
    expect(input).toHaveAttribute('name', 'password');
    expect(input).toHaveAttribute('placeholder', 'Your password...');
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toHaveAttribute('autoComplete', 'off');
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByTestId('passwordInputToggle')).toBeInTheDocument();
  });

  it('calls form handlers correctly', async () => {
    const { user } = setup();
    const input = screen.getByTestId('passwordInput');

    await user.type(input, 'mypassword');
    expect(handleChange).toHaveBeenCalled();

    await user.tab(); // triggers blur
    expect(handleBlur).toHaveBeenCalled();
  });

  it('does not show error if field not touched', () => {
    setup({
      error: 'Invalid password',
      touched: false,
    });

    expect(screen.queryByText('Invalid password')).not.toBeInTheDocument();
  });

  it('shows error message when touched and has error', () => {
    mockGetFormFieldError.mockReturnValue('Invalid password');

    setup({
      error: 'Invalid password',
      touched: true,
      value: 'badpass',
    });

    const input = screen.getByTestId('passwordInput');

    expect(screen.getByText('Invalid password')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');

    const container = input.closest('[data-invalid]');

    expect(container).toHaveAttribute('data-invalid');
  });

  it('toggles password visibility on eye icon click', async () => {
    const { user } = setup();

    const input = screen.getByTestId('passwordInput');

    expect(input).toHaveAttribute('type', 'password');

    const toggleButton = screen.getByTestId('passwordInputToggle');

    await user.click(toggleButton);

    expect(toggleShowPassword).toHaveBeenCalledTimes(1);
  });

  it('renders input as text when showPassword is true', () => {
    setup({ showPassword: true });

    const input = screen.getByTestId('passwordInput');

    expect(input).toHaveAttribute('type', 'text');
  });

  it('supports custom id, name, label, and data-testid', () => {
    setup({
      id: 'customId',
      name: 'customName',
      label: 'Custom Label',
      dataTestId: 'customTestId',
    });

    const input = screen.getByTestId('customTestId');

    expect(input).toHaveAttribute('id', 'customId');
    expect(input).toHaveAttribute('name', 'customName');
    expect(screen.getByLabelText(/Custom Label/i)).toBeInTheDocument();
  });
});
