import type { Meta, Story } from '@storybook/react';

import { PlayerControls } from '.';
import { PlayerControlsProps } from './types';

export default {
  component: PlayerControls,
  title: 'Molecules/PlayerControls',
  args: {
    playing: false,
  },
} as Meta;

const Template: Story<PlayerControlsProps> = (args) => (
  <PlayerControls {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Playing = Template.bind({});
Playing.args = { playing: true };
