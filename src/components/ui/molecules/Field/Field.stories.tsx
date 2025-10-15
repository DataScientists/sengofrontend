import { Input } from '@components/ui/atoms/Input';
import type { Meta, StoryObj } from '@storybook/react';

import { Field } from './Field';

const meta = {
  title: 'Components/Field',
  component: Field,
  args: {
    children: <Input type="email" />,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nr9d48NR1F1NrTYN8TRz5d/UPP?node-id=450-1343&t=JAcASt2swB4N9WFy-1',
    },
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default
 * (uses buttonRecipe.defaultVariants: { visual: 'primary', size: 'small' })
 */
export const Default: Story = {};
