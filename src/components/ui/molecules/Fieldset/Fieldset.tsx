import { Fieldset as ChakraFieldset, FieldsetLegend } from '@chakra-ui/react';
import { Stack } from '@components/ui/atoms';
import {
  FieldsetContent,
  FieldsetErrorText,
  type FieldsetErrorTextProps,
  FieldsetHelperText,
  type FieldsetLegendProps,
} from '@components/ui/atoms/Fieldset';
import * as React from 'react';

export interface FieldsetProps extends ChakraFieldset.RootProps {
  legend?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  legendProps?: FieldsetLegendProps;
  helperTextProps?: FieldsetErrorTextProps;
  errorTextProps?: FieldsetErrorTextProps;
}

export const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  function Fieldset(props, ref) {
    const {
      children,
      legend,
      helperText,
      errorText,
      legendProps,
      helperTextProps,
      errorTextProps,
      ...rest
    } = props;

    return (
      <ChakraFieldset.Root {...rest} ref={ref}>
        <Stack>
          {legend && <FieldsetLegend {...legendProps}>{legend}</FieldsetLegend>}

          {helperText && <FieldsetHelperText {...helperTextProps}>{helperText}</FieldsetHelperText>}
        </Stack>

        <FieldsetContent>{children}</FieldsetContent>
        {errorText && <FieldsetErrorText {...errorTextProps}>{errorText}</FieldsetErrorText>}
      </ChakraFieldset.Root>
    );
  }
);
