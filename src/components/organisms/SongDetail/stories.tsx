import type { Meta, Story } from '@storybook/react';

import { SongDetail } from '.';
import { SongDetailProps } from './types';

export default {
  component: SongDetail,
  title: 'Organisms/SongDetail',
  args: {
    song: {
      image: {
        url: 'https://via.placeholder.com/150',
        alt: 'Placeholder',
      },
      title: 'Out of My Mine',
      author: 'Anuel AA',
      description:
        'Today is the Dia del Libro in Spain and we are celebrating our passion for books and reading. We’ve just created an online bookclub on Slack',
      genre: 'Techno',
      audio: { seconds: 180 },
    },
    playing: false,
    icon: 'heart-add-outline',
  },
} as Meta;

const Template: Story<SongDetailProps> = (args) => <SongDetail {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const FavouriteSong = Template.bind({});
FavouriteSong.args = { icon: 'heart-fill' };
