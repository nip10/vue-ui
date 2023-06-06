import type { Meta, StoryObj } from '@storybook/vue3';

import XCheckbox from './Checkbox.vue';

const meta = {
  title: 'Components/Checkbox',
  component: XCheckbox,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', defaultValue: 'on' },
    // dir: { control: 'radio', options: ['ltr', 'rtl'], defaultValue: 'ltr' },
    checked: { control: 'radio', options: [true, false, 'indeterminate'], defaultValue: false },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
    // onChange: { action: 'onChange' },
    name: { control: 'text' },
    form: { control: 'text' },
  },
} satisfies Meta<typeof XCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Selection: Story = {
  args: { checked: false },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Invalid: Story = {
  args: { invalid: true },
};
