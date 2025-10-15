import { Icon, InputGroup } from '@chakra-ui/react';
import { EyeIcon, IconButton } from '@components/ui/atoms';
import { Input } from '@components/ui/atoms/Input';

import { Field } from '../../Field/Field';

type PasswordInputFieldProps = {
  id?: string;
  name?: string;
  label?: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
  autoFocus?: boolean;
  dataTestId?: string;
  placeholder?: string;
};

export const PasswordInputField = ({
  id = 'password',
  name = 'password',
  label = 'Password',
  value,
  error,
  touched,
  onChange,
  onBlur,
  onFocus,
  showPassword = false,
  toggleShowPassword,
  autoFocus = false,
  dataTestId = 'passwordInput',
  placeholder = 'Your password...',
}: PasswordInputFieldProps) => {
  return (
    <Field
      required
      label={label}
      invalid={touched && !!error}
      errorText={error}
      labelProps={{ htmlFor: id }}
      color="body.dark"
    >
      <InputGroup
        endElement={
          toggleShowPassword && (
            <IconButton
              aria-label="Toggle password visibility"
              variant="ghost"
              data-testid={`${dataTestId}Toggle`}
              onClick={toggleShowPassword}
            >
              <Icon color="title.dark" size="sm">
                <EyeIcon />
              </Icon>
            </IconButton>
          )
        }
      >
        <Input
          id={id}
          name={name}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete="off"
          data-testid={dataTestId}
        />
      </InputGroup>
    </Field>
  );
};
