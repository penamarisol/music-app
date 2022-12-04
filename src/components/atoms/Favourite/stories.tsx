import type { Meta, Story } from '@storybook/react';

import { Favourite } from '.';
import { FavouriteProps } from './types';

export default {
  component: Favourite,
  title: 'Atoms/Favourite',
  args: {
    icon: 'heart-fill',
  },
} as Meta;

const Template: Story<FavouriteProps> = (args) => <Favourite {...args} />;

export const heartFill = Template.bind({});

export const heartAddOutline = Template.bind({});
heartAddOutline.args = { icon: 'heart-add-outline' };
