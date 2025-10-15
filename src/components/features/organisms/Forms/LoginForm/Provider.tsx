import { createProvider } from '@shared/react/createProvider';
import { extractErrorMessage } from '@shared/utils';
import { useLogin } from '@store/me/hooks';
import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import type { InputType } from 'storybook/internal/csf';

import { initialValues, loginSchema } from './login.schema';

type ContextProps = {
  generalError: string;
  isSubmitting: boolean;
  formik: ReturnType<typeof useFormik<InputType>>;
  resetGeneralError: () => void;
  showPassword: boolean;
  toggleShowPassword: () => void;
  toggleRememberMe: () => void;
  rememberMe: boolean;
};

const useValue = (): ContextProps => {
  const { login, loginLoading } = useLogin();
  const [generalError, setGeneralError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = async (values: InputType) => {
    setGeneralError('');

    try {
      // run the login and surface any field/general errors
      const { success, errors } = await login(values.email, values.password);

      if (!success) {
        const err = extractErrorMessage(errors);

        setGeneralError(err);
      }
    } catch (err: any) {
      if (err instanceof Error) {
        setGeneralError(err.message);
      }
    }
  };

  const resetGeneralError = () => {
    setGeneralError('');
  };

  const toggleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const toggleRememberMe = useCallback(() => {
    setRememberMe(!rememberMe);
  }, [setRememberMe, rememberMe]);
  const formik = useFormik<InputType>({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: loginSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });

  return {
    generalError,
    isSubmitting: formik.isSubmitting || loginLoading,
    formik,
    resetGeneralError,
    showPassword,
    toggleShowPassword,
    toggleRememberMe,
    rememberMe,
  };
};

useValue.__PROVIDER__ = 'src/components/features/LoginForm/provider.tsx';
export const { Provider: LoginFormProvider, useContext: useLoginFormContext } =
  createProvider(useValue);
