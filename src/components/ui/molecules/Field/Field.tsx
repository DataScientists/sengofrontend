import { Field as ChakraField } from '@chakra-ui/react';
import {
  FieldErrorText,
  type FieldErrorTextProps,
  FieldHelperText,
  type FieldHelperTextProps,
  FieldLabel,
  type FieldLabelProps,
  FieldRequiredIndicator,
} from '@components/ui/atoms/Field';
import * as React from 'react';

export interface FieldProps extends Omit<ChakraField.RootProps, 'label'> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  optionalText?: React.ReactNode;
  labelProps?: FieldLabelProps;
  helperTextProps?: FieldHelperTextProps;
  errorTextProps?: FieldErrorTextProps;
  required?: boolean;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(function Field(props, ref) {
  const {
    label,
    required,
    children,
    helperText,
    errorText,
    optionalText,
    labelProps,
    helperTextProps,
    errorTextProps,
    ...rest
  } = props;

  return (
    <ChakraField.Root ref={ref} {...rest} required={required}>
      {label && (
        <FieldLabel {...labelProps} color="body.dark" textStyle="bodyThree">
          {label}
          {required && <FieldRequiredIndicator color={'red.1050'} />}
          {optionalText && <FieldRequiredIndicator fallback={optionalText} />}
        </FieldLabel>
      )}
      {children}
      {helperText && <FieldHelperText {...helperTextProps}>{helperText}</FieldHelperText>}
      {errorText && (
        <FieldErrorText color={'red.1050'} {...errorTextProps}>
          {errorText}
        </FieldErrorText>
      )}
    </ChakraField.Root>
  );
});
