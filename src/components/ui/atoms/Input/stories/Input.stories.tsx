import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '../../Box';
import { Input } from '../Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Enter text',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nr9d48NR1F1NrTYN8TRz5d/UPP?node-id=450-1343&t=JAcASt2swB4N9WFy-1',
    },
  },
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default
 * (uses buttonRecipe.defaultVariants: { visual: 'primary', size: 'small' })
 */
export const Default: Story = {};

export { InputSizeTable as Sizes } from './InputSizeTable';
