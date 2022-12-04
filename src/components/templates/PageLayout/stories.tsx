import { Separator } from '$/components/atoms/Separator';
import { Text } from '$/components/atoms/Text';
import type { Meta, Story } from '@storybook/react';

import { PageLayout } from '.';
import { PageLayoutProps } from './types';

export default {
  component: PageLayout,
  title: 'Templates/PageLayout',
} as Meta;

const Template: Story<PageLayoutProps> = (args) => (
  <PageLayout {...args}>
    <Text tag="h1" variant="title1">
      Good morning!
    </Text>
    <Separator />
  </PageLayout>
);

export const Default = Template.bind({});
