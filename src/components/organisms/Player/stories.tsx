import type { Meta, Story } from '@storybook/react';

import { Player } from '.';
import { PlayerProps } from './types';

export default {
  component: Player,
  title: 'Organisms/Player',
  args: {},
} as Meta;

const Template: Story<PlayerProps> = (args) => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {};
