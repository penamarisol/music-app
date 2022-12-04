import type { Meta, Story } from '@storybook/react';

import { PlayerProgressBar } from '.';
import { PlayerProgressBarProps } from './types';

export default {
  component: PlayerProgressBar,
  title: 'Molecules/PlayerProgressBar',
  args: {
    progress: 138,
    maxProgress: 186,
  },
} as Meta;

const Template: Story<PlayerProgressBarProps> = (args) => (
  <PlayerProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
