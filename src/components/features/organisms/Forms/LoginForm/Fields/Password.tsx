import { PasswordInputField } from '@components/ui/molecules';
import { getFormFieldError } from '@shared/utils';

import { useLoginFormContext } from '../Provider';

export const PasswordInput = () => {
  const {
    formik: { values, errors, touched, handleChange, handleBlur },
    resetGeneralError,
    showPassword,
    toggleShowPassword,
  } = useLoginFormContext();

  return (
    <PasswordInputField
      value={values.password}
      error={getFormFieldError(touched, errors, 'password')}
      touched={!!touched.password}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={resetGeneralError}
      showPassword={showPassword}
      toggleShowPassword={toggleShowPassword}
      placeholder="Your password..."
      dataTestId="passwordInput"
    />
  );
};
