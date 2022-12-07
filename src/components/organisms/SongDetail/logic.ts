import { Song } from '$/model/song';
import { getAudioDuration } from '$/utils/audio';
import { useFavourite } from '$/utils/audio/useFavourite.hook';
import { useEffect, useState } from 'react';

export const useLogic = (song: Song) => {
  const [seconds, setSeconds] = useState(0);
  const [loading, setLoading] = useState(true);

  const { isFavourite, toggle } = useFavourite(song);

  useEffect(() => {
    getAudioDuration(song.audio.url)
      .then(setSeconds)
      .catch(() => setSeconds(0))
      .finally(() => setLoading(false));
  }, [song.audio.url]);

  return {
    seconds,
    loading,
    isFavourite,
    toggleFavourite: toggle,
  };
};
