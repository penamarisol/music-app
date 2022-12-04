import type { Meta, Story } from '@storybook/react';

import { PlayerControl } from '.';
import { PlayerControlProps } from './types';

export default {
  component: PlayerControl,
  title: 'Atoms/PlayerControl',
  args: {
    icon: 'pause',
    size: 'regular',
    variant: 'dark',
  },
} as Meta;

const Template: Story<PlayerControlProps> = (args) => (
  <PlayerControl {...args} />
);

export const Pause = Template.bind({});

export const Play = Template.bind({});
Play.args = { icon: 'play' };

export const skipForward = Template.bind({});
skipForward.args = { icon: 'skip-forward' };

export const skipBackward = Template.bind({});
skipBackward.args = { icon: 'skip-backward' };
