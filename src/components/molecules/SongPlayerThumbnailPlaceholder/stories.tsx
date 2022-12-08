import type { Meta, Story } from '@storybook/react';

import { SongPlayerThumbnailPlaceholder } from '.';
import { SongPlayerThumbnailPlaceholderProps } from './types';

export default {
  component: SongPlayerThumbnailPlaceholder,
  title: 'Molecules/SongPlayerThumbnailPlaceholder',
  args: {},
} as Meta;

const Template: Story<SongPlayerThumbnailPlaceholderProps> = (args) => (
  <SongPlayerThumbnailPlaceholder {...args} />
);

export const Default = Template.bind({});
Default.args = {};
