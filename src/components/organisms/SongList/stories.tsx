import type { Meta, Story } from '@storybook/react';

import { SongsList } from '.';
import { SongsListProps } from './types';

const song = {
  url: 'https://via.placeholder.com/150',
  alt: 'Placeholder',
  title: 'Out of My Mine',
  author: 'Anuel AA',
  description:
    'Today is the Dia del Libro in Spain and we are celebrating our passion for books and reading. We’ve just created an online bookclub on Slack',
  genre: 'Techno',
  seconds: 180,
};

export default {
  component: SongsList,
  title: 'Organisms/SongsList',
  args: {
    songs: [song, song],
  },
} as Meta;

const Template: Story<SongsListProps> = (args) => <SongsList {...args} />;

export const Default = Template.bind({});
Default.args = {};
