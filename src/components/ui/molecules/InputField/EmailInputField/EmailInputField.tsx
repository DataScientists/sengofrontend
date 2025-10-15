import { Input } from '@components/ui/atoms/Input';

import { Field } from '../../Field/Field';

type EmailInputFieldProps = {
  value: string;
  error?: string;
  touched?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  dataTestId?: string;
  placeholder?: string;
};

export const EmailInputField = ({
  value,
  error = '',
  touched = false,
  onChange,
  onBlur,
  onFocus,
  autoFocus = false,
  dataTestId = 'emailInput',
  placeholder = 'Your email...',
}: EmailInputFieldProps) => {
  const showError = touched && !!error;

  return (
    <Field
      required
      label="Email"
      invalid={showError}
      errorText={showError ? error : ''}
      labelProps={{ htmlFor: 'email' }}
      color="body.dark"
    >
      <Input
        id="email"
        name="email"
        type="email"
        value={value}
        onChange={onChange}
        onInput={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoFocus={autoFocus}
        autoComplete="off"
        placeholder={placeholder}
        data-testid={dataTestId}
      />
    </Field>
  );
};
