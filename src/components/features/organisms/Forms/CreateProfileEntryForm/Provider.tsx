import { createProvider } from '@shared/react/createProvider';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

interface ProviderProps {
  onSubmit: (data: { linkedinUrn: string; gender: string }) => Promise<void>;
  isLoading: boolean;
}

type FormValues = {
  linkedinUrn: string;
  gender: string;
};

const initialValues: FormValues = {
  linkedinUrn: '',
  gender: '',
};

const validationSchema = Yup.object().shape({
  linkedinUrn: Yup.string().required('LinkedIn URN is required'),
  gender: Yup.string(),
});

type ContextProps = {
  formik: ReturnType<typeof useFormik<FormValues>>;
  isSubmitting: boolean;
  generalError: string;
  resetGeneralError: () => void;
};

const useValue = (props: ProviderProps): ContextProps => {
  const { onSubmit, isLoading } = props;
  const [generalError, setGeneralError] = useState<string>('');

  const handleSubmit = async (values: FormValues) => {
    setGeneralError('');
    
    try {
      await onSubmit(values);
    } catch (error: any) {
      if (error instanceof Error) {
        setGeneralError(error.message);
      } else {
        setGeneralError('An error occurred while submitting the form');
      }
    }
  };

  const resetGeneralError = () => {
    setGeneralError('');
  };

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });

  return {
    formik,
    isSubmitting: formik.isSubmitting || isLoading,
    generalError,
    resetGeneralError,
  };
};

useValue.__PROVIDER__ = 'src/components/features/organisms/Forms/CreateProfileEntryForm/Provider.tsx';
export const { Provider: CreateProfileEntryFormProvider, useContext: useCreateProfileEntryFormContext } =
  createProvider<ContextProps, ProviderProps>(useValue);
