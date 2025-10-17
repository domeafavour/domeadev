import type { Meta, StoryObj } from '@storybook/react';

// Simple example component for demonstration
const Button = ({ label, onClick }: { label: string; onClick?: () => void }) => (
  <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
    {label}
  </button>
);

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const ClickExample: Story = {
  args: {
    label: 'Click Me',
    onClick: () => alert('Clicked!'),
  },
};
