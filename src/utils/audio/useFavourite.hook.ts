import { usePlayList } from '$/context/PlayList';
import { Song } from '$/model/song';
import { useEffect } from 'react';

export const useFavourite = (song: Song) => {
  const { favouriteSongs, addFavouriteSong, removeFavouriteSong } =
    usePlayList();

  const saveFavs = (favourites: number[]) =>
    localStorage.setItem('favs', JSON.stringify(favourites));

  useEffect(() => {
    saveFavs(favouriteSongs);
  }, [favouriteSongs]);

  const isFavourite = favouriteSongs.some(
    (songId: number) => songId === song.id,
  );

  return {
    isFavourite,
    toggle: isFavourite
      ? () => removeFavouriteSong(song)
      : () => addFavouriteSong(song),
  };
};
