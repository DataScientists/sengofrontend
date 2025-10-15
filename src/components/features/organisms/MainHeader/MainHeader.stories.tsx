import type { Meta, StoryObj } from '@storybook/react';

import { withAuth } from '../../../../../.storybook/preview';
import { MainHeader } from './MainHeader';

const meta = {
  title: 'Components/Organisms/MainHeader',
  component: MainHeader,
  args: {
    children: 'Button',
  },
  decorators: [withAuth],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nr9d48NR1F1NrTYN8TRz5d/UPP?node-id=450-1343&t=JAcASt2swB4N9WFy-1',
    },
  },
} satisfies Meta<typeof MainHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
