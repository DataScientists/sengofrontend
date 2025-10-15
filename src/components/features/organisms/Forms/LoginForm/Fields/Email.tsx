import { EmailInputField } from '@components/ui/molecules';
import { getFormFieldError } from '@shared/utils';

import { useLoginFormContext } from '../Provider';

export const EmailInput = () => {
  const {
    formik: { values, errors, touched, handleChange, handleBlur },
    resetGeneralError,
  } = useLoginFormContext();

  return (
    <EmailInputField
      value={values.email}
      error={getFormFieldError(touched, errors, 'email')}
      touched={!!touched.email}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={resetGeneralError}
      placeholder="Your email..."
      dataTestId="emailInput"
    />
  );
};
