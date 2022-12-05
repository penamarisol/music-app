import type { Meta, Story } from '@storybook/react';

import { SongDetailPlaceholder } from '.';
import { SongDetailPlaceholderProps } from './types';

export default {
  component: SongDetailPlaceholder,
  title: 'Organisms/SongDetailPlaceholder',
  args: {},
} as Meta;

const Template: Story<SongDetailPlaceholderProps> = (args) => (
  <SongDetailPlaceholder {...args} />
);

export const Default = Template.bind({});
Default.args = {};
