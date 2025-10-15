import type { LoginInput } from '@service/auth';
import * as Yup from 'yup';

export type Input = LoginInput;
export const initialValues: Input = {
  email: '',
  password: '',
} as const;

export const emailSchema = Yup.string().required('Email is required').email('Invalid email format'); // Add email validation

export const passwordSchema = Yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters');

export const loginSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});
