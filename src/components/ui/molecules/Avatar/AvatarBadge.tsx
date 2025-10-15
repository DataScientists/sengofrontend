import type { CircleProps, FloatProps } from '@components/ui/atoms';
import { Circle, Float } from '@components/ui/atoms';
import * as React from 'react';

// Define props with default values and explicit types
export interface AvatarBadgeProps {
  floatProps?: Omit<FloatProps, 'children'>; // Omit children to avoid conflicts
  circleProps?: CircleProps;
  // Optional custom badge content (overrides Circle)
  children?: React.ReactNode;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({
  floatProps = {
    placement: 'bottom-end',
    offsetX: '1',
    offsetY: '1',
  },
  circleProps = {
    bg: 'green.500',
    size: '8px',
    outline: '0.2em solid',
    outlineColor: 'bg',
  },
  children,
}) => {
  return <Float {...floatProps}>{children ?? <Circle {...circleProps} />}</Float>;
};

// Optional: Add display name for debugging
AvatarBadge.displayName = 'AvatarBadge';
