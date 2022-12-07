import { Song } from '$/model/song';

import { SongElementResponse } from './types';

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const humanizeGenre = (genre: string) =>
  genre
    .split('_')
    .map((word) => capitalize(word.toLowerCase()))
    .join(' ');

export const listMapper = (list: SongElementResponse[]): Song[] =>
  list.map((song) => ({
    id: song.id,
    title: song.name,
    description: song.description,
    genre: humanizeGenre(song.genre),
    image: {
      url: song.image,
      alt: `${song.name} ${song.author.name}`,
    },
    author: song.author.name,
    audio: {
      url: song.audio.url,
    },
  }));
