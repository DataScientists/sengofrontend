import '@testing-library/jest-dom';

import { render } from '@test/setupTests';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { EmailInput } from '../../../Fields';

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

describe('<EmailInput />', () => {
  const resetGeneralError = jest.fn();
  const handleChange = jest.fn();
  const handleBlur = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseLoginFormContext.mockReturnValue({
      formik: {
        values: { email: '' },
        errors: {},
        touched: {},
        handleChange,
        handleBlur,
      },
      resetGeneralError,
      generalError: '',
      isSubmitting: false,
    });
    mockGetFormFieldError.mockReturnValue('');
  });

  // Helper to override mock values
  const setup = (overrides = {}) => {
    return {
      useLoginContextMock: mockUseLoginFormContext.mockReturnValue({
        ...mockUseLoginFormContext(),
        ...overrides,
      }),
      user: userEvent.setup(),
      ...render(<EmailInput />),
    };
  };

  it('renders with correct attributes', () => {
    setup();

    const input = screen.getByTestId('emailInput');

    expect(input).toHaveAttribute('id', 'email');
    expect(input).toHaveAttribute('autoComplete', 'off');
    expect(screen.getByText('*')).toBeInTheDocument(); // Required marker
  });

  it('handles user interactions', async () => {
    const { user } = setup();

    const input = screen.getByTestId('emailInput');

    await user.type(input, 'test@example.com');
    expect(handleChange).toHaveBeenCalled();

    await user.tab(); // Triggers blur
    expect(handleBlur).toHaveBeenCalled();

    await user.click(input); // Triggers focus
    expect(resetGeneralError).toHaveBeenCalled();
  });

  it('does not show error when field is untouched', () => {
    setup({
      formik: {
        values: { email: 'bad@email' },
        errors: { email: 'Invalid email' },
        touched: { email: false },
        handleChange,
        handleBlur,
      },
    });

    expect(screen.queryByText('Invalid email')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });
  it('shows error message when field is touched and invalid', () => {
    // Mock the error message
    mockGetFormFieldError.mockReturnValue('Invalid email');

    setup({
      formik: {
        values: { email: 'bad@email' },
        errors: { email: 'Invalid email' },
        touched: { email: true },
        handleChange,
        handleBlur,
      },
    });

    // Verify error message appears
    expect(screen.getByText('Invalid email')).toBeInTheDocument();

    // Verify input is marked as invalid
    const input = screen.getByTestId('emailInput');

    expect(input).toHaveAttribute('aria-invalid', 'true');

    // Verify the field container has invalid state
    const fieldContainer = input.closest('[data-invalid]');

    expect(fieldContainer).toHaveAttribute('data-invalid');
  });
});
