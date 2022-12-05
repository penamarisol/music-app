import { Song } from '$/model/song';

import { SongElementResponse } from './types';

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const humanizeGenre = (genre: string) =>
  genre
    .split('_')
    .map((word) => capitalize(word.toLowerCase()))
    .join(' ');

const getAudioDuration = (url: string): Promise<number> =>
  new Promise((resolve, _) => {
    const audio = new Audio(url);
    audio.onloadedmetadata = () => resolve(audio.duration);
    audio.onerror = () => resolve(0);
  });

export const listMapper = async (
  list: SongElementResponse[],
): Promise<Song[]> => {
  const songs = [];
  for (const song of list) {
    songs.push({
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
        seconds: await getAudioDuration(song.audio.url),
      },
    });
  }

  return songs;
};
