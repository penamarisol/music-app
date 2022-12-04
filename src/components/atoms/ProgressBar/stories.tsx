import type { Meta, Story } from '@storybook/react';

import { ProgressBar } from '.';
import { ProgressBarProps } from './types';

export default {
  component: ProgressBar,
  title: 'Atoms/ProgressBar',
  args: {
    progress: 30,
    maxProgress: 120,
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
