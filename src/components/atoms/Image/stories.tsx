import type { Meta, Story } from '@storybook/react';

import { Image } from '.';
import { ImageProps } from './types';

export default {
  component: Image,
  title: 'Atoms/Image',
  args: {
    url: 'https://via.placeholder.com/150',
    alt: 'Placeholder',
    size: 'regular',
  },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const RegularImage = Template.bind({});

export const SmallImage = Template.bind({});
SmallImage.args = { size: 'small' };
