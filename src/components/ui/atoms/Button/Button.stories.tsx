// Button.stories.tsx
import type { Meta,StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nr9d48NR1F1NrTYN8TRz5d/UPP?node-id=450-1343&t=JAcASt2swB4N9WFy-1',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default
 * (uses buttonRecipe.defaultVariants: { visual: 'primary', size: 'small' })
 */
export const Default: Story = {};

/**
 * Disabled (Primary, Small)
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole('button');

    await expect(button).toBeDisabled();
  },
};

/**
 * Primary (Small)
 */
export const Primary: Story = {
  args: {
    visual: 'primary',
    children: 'Primary',
  },
};

/**
 * Primary (Big)
 */
export const PrimaryBig: Story = {
  name: 'Primary (Big)',
  args: {
    visual: 'primary',
    size: 'big',
    children: 'Primary Big',
  },
};

/**
 * Secondary (Small)
 */
export const Secondary: Story = {
  args: {
    visual: 'secondary',
    size: 'small',
    children: 'Secondary',
  },
};

/**
 * Secondary (Big)
 */
export const SecondaryBig: Story = {
  name: 'Secondary (Big)',
  args: {
    visual: 'secondary',
    size: 'big',
    children: 'Secondary Big',
  },
};

/**
 * Inherit (Small)
 */
export const Inherit: Story = {
  args: {
    visual: 'inherit',
    size: 'small',
    children: 'Inherit',
  },
};

/**
 * Inherit (Big)
 */
export const InheritBig: Story = {
  name: 'Inherit (Big)',
  args: {
    visual: 'inherit',
    size: 'big',
    children: 'Inherit Big',
  },
};

/**
 * Disabled (Secondary, Small)
 */
export const DisabledSecondary: Story = {
  name: 'Disabled Secondary (Small)',
  args: {
    visual: 'secondary',
    size: 'small',
    disabled: true,
    children: 'Disabled Secondary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = await canvas.findByRole('button', { name: /Disabled Secondary/i });

    await expect(btn).toBeDisabled();
  },
};

/**
 * Disabled (Inherit, Big)
 */
export const DisabledInheritBig: Story = {
  name: 'Disabled Inherit (Big)',
  args: {
    visual: 'inherit',
    size: 'big',
    disabled: true,
    children: 'Disabled Inherit Big',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = await canvas.findByRole('button', { name: /Disabled Inherit Big/i });

    await expect(btn).toBeDisabled();
  },
};
