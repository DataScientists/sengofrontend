import { Helmet } from 'react-helmet-async';

interface WindowTitleProps {
  title: string;
}

export const WindowTitle: React.FC<WindowTitleProps> = ({ title }) => {
  return <Helmet title={title} />;
};

WindowTitle.displayName = 'WindowTitle';
