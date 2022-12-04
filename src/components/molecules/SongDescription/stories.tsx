import type { Meta, Story } from '@storybook/react';

import { SongDescription } from '.';
import { SongDescriptionProps } from './types';

export default {
  component: SongDescription,
  title: 'Molecules/SongDescription',
  args: {
    genre: 'Techno',
    playing: false,
    seconds: 180,
  },
} as Meta;

const Template: Story<SongDescriptionProps> = (args) => (
  <SongDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Playing = Template.bind({});
Playing.args = { playing: true };
