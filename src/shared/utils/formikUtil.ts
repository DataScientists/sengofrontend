import type { FormikErrors, FormikTouched } from 'formik';

export const getFormFieldError = (
  touched: FormikTouched<any>,
  errors: FormikErrors<any>,
  field: string
): string => {
  if (!touched[field] || !errors[field]) return '';

  return typeof errors[field] === 'string' ? errors[field] : '';
};

export const hasFormikErrors = <T extends Record<string, any>>(
  errors: FormikErrors<T>,
  touched?: FormikTouched<T>
): boolean => {
  // If touched object is provided, only check touched fields
  if (touched) {
    return Object.keys(touched).some((key) => touched[key as keyof T] && errors[key as keyof T]);
  }

  // Otherwise check all fields
  return Object.keys(errors).some((key) => errors[key as keyof T] !== undefined);
};
