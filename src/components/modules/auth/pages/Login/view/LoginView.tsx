// Change from barrel import to direct import
import { LoginForm } from '@components/features/organisms/Forms/LoginForm';

export const LoginView: React.FC = () => <LoginForm />;
LoginView.displayName = 'LoginView';
