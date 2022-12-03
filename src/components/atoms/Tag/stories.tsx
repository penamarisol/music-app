import type { Meta, Story } from '@storybook/react';

import { Tag } from '.';
import { TagProps } from './types';

export default {
  component: Tag,
  title: 'Atoms/Tag',
  args: {
    label: 'Pop latino',
  },
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
