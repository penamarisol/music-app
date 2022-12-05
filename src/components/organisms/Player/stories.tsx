import type { Meta, Story } from '@storybook/react';

import { Player } from '.';
import { PlayerProps } from './types';

export default {
  component: Player,
  title: 'Organisms/Player',
  args: {
    url: 'https://via.placeholder.com/150',
    alt: 'Placeholder',
    title: 'Lemon Tree',
    description: 'Post Malone',
    progress: 138,
    maxProgress: 186,
  },
} as Meta;

const Template: Story<PlayerProps> = (args) => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {};
