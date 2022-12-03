import type { Meta, Story } from '@storybook/react';

import { SideMenu } from '.';

export default {
  component: SideMenu,
  title: 'Organisms/SideMenu',
} as Meta;

const Template: Story = () => <SideMenu />;

export const Default = Template.bind({});
