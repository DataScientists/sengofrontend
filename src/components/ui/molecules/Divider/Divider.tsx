import { Box, type BoxProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export interface DividerProps extends BoxProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: string;
  color?: string;
  isInset?: boolean;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    { orientation = 'horizontal', thickness = '1px', color = 'gray.300', isInset = false, ...rest },
    ref
  ) => {
    const isVertical = orientation === 'vertical';

    return (
      <Box
        position="relative"
        w={isVertical ? thickness : 'full'}
        h={isVertical ? 'full' : thickness}
        px={isInset && !isVertical ? 6 : 0}
      >
        <Box
          ref={ref}
          role="separator"
          aria-orientation={orientation}
          position="absolute"
          top={isVertical ? 0 : '50%'}
          left={isVertical ? '50%' : isInset ? 0 : '-1.9rem'}
          transform={isVertical ? 'translateX(-50%)' : 'translateY(-50%)'}
          width={isVertical ? thickness : isInset ? '100%' : 'calc(100% + 3.4rem)'}
          height={isVertical ? '100%' : thickness}
          bg={color}
          {...rest}
        />
      </Box>
    );
  }
);

Divider.displayName = 'Divider';
