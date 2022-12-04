import type { Meta, Story } from '@storybook/react';

import { SongPlayerThumbnail } from '.';
import { SongPlayerThumbnailProps } from './types';

export default {
  component: SongPlayerThumbnail,
  title: 'Molecules/SongPlayerThumbnail',
  args: {
    url: 'https://via.placeholder.com/150',
    alt: 'Placeholder',
    title: 'Lemon Tree',
    description: 'Post Malone',
  },
} as Meta;

const Template: Story<SongPlayerThumbnailProps> = (args) => (
  <SongPlayerThumbnail {...args} />
);

export const Default = Template.bind({});
Default.args = {};
