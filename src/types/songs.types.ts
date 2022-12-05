import { Audio } from '$/types/audio.types';
import { Author } from '$/types/author.types';

export type Song = {
  id: number;
  name: string;
  description: string;
  genre: string;
  image: string;
  author: Author;
  audio: Audio;
};

export type SongsResponse = {
  songs: { songs: Song[] };
};
