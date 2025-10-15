import '@testing-library/jest-dom';

import { render } from '@test/setupTests';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { EmailInputField } from './EmailInputField';

//Mocks getFormFieldError from a shared util file
jest.mock('@shared/utils', () => ({
  getFormFieldError: jest.fn(),
}));

//Stores references to the mocked functions
const mockGetFormFieldError = jest.requireMock('@shared/utils').getFormFieldError;

//Begins the test suite
describe('<EmailInputField />', () => {
  //Mock handler functions to verify that events are triggered
  const resetGeneralError = jest.fn();
  const handleChange = jest.fn();
  const handleBlur = jest.fn();

  //Resets all mock call history before each test.
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetFormFieldError.mockReturnValue('');
  });

  //helper to render EmailInput and override default formik context
  const setup = (overrides = {}) => {
    const props = {
      value: '',
      error: '',
      touched: false,
      onChange: handleChange,
      onBlur: handleBlur,
      onFocus: resetGeneralError,
      autoFocus: true,
      ...overrides,
    };

    return {
      user: userEvent.setup(),
      ...render(<EmailInputField {...props} />),
    };
  };

  //Renders component with correct attributes
  it('renders with correct attributes', () => {
    setup();

    const input = screen.getByTestId('emailInput');

    expect(input).toHaveAttribute('id', 'email');
    expect(input).toHaveAttribute('autoComplete', 'off');
    expect(input).toHaveAttribute('placeholder', 'Your email...');
    expect(screen.getByText('*')).toBeInTheDocument(); // requiredf ield indicator
  });

  //Handle user interactions
  it('handles user interactions', async () => {
    const { user } = setup();

    const input = screen.getByTestId('emailInput');

    await user.type(input, 'test@example.com');
    expect(handleChange).toHaveBeenCalled();

    await user.tab();
    expect(handleBlur).toHaveBeenCalled();

    await user.click(input);
    expect(resetGeneralError).toHaveBeenCalled();
  });

  // No error shown if untouched
  it('does not show error when field is untouched', () => {
    setup({
      value: 'invalid@email',
      error: 'Invalid email',
      touched: false,
    });

    expect(screen.queryByText('Invalid email')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });

  // Show error if touched and invalid
  it('shows error message when field is touched and invalid', () => {
    mockGetFormFieldError.mockReturnValue('Invalid email');

    setup({
      value: 'invalid@email',
      error: 'Invalid email',
      touched: true,
    });

    expect(screen.getByText('Invalid email')).toBeInTheDocument();

    const input = screen.getByTestId('emailInput');

    expect(input).toHaveAttribute('aria-invalid', 'true');

    const fieldContainer = input.closest('[data-invalid]');

    expect(fieldContainer).toHaveAttribute('data-invalid');
  });
});
