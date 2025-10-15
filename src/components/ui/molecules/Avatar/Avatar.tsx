import { Avatar as ChakraAvatar,AvatarImage } from '@chakra-ui/react';
import { AvatarFallback } from '@components/ui/atoms';
import * as React from 'react';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export interface AvatarProps extends ChakraAvatar.RootProps {
  name?: string;
  src?: string;
  srcSet?: string;
  loading?: ImageProps['loading'];
  icon?: React.ReactElement;
  fallback?: React.ReactNode;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const { name, src, srcSet, loading, icon, fallback, children, ...rest } = props;

  return (
    <ChakraAvatar.Root ref={ref} {...rest}>
      <AvatarFallback name={name}>{icon ?? fallback}</AvatarFallback>
      <AvatarImage src={src} srcSet={srcSet} loading={loading} />
      {children}
    </ChakraAvatar.Root>
  );
});
