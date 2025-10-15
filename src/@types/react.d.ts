import 'react';

declare module 'react' {
  export type FCWithChildren<T = unknown> = FC<PropsWithChildren<T>>;
}
