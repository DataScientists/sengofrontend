import { AuthLayout } from '@components/templates';
import { LoginForm } from '@components/features/organisms/Forms';

export const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

LoginPage.displayName = 'LoginPage';
