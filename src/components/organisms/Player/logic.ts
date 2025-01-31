import { usePlayList } from '$/context/PlayList';
import { getAudioDuration } from '$/utils/audio';
import { useEffect, useRef, useState } from 'react';

export const useLogic = () => {
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const {
    currentSongPlayer: songPlayer,
    playing,
    playSong,
    pauseSong,
    skipBackward,
    skipForward,
  } = usePlayList();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onProgressUpdated = () => {
    if (audioRef.current) setProgress(Math.round(audioRef.current.currentTime));
  };

  const setCurrentProgress = (newProgress: number) => {
    setProgress(newProgress);
    if (audioRef.current) audioRef.current.currentTime = newProgress;
  };
  const play = () => playSong();
  const pause = () => pauseSong();

  useEffect(() => {
    if (playing) {
      void audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [playing, audioRef]);

  useEffect(() => {
    if (audioRef.current && songPlayer?.audio.url !== audioRef.current.src) {
      audioRef.current.src = songPlayer?.audio.url as string;
    }
    if (playing) void audioRef.current?.play();
  }, [songPlayer?.audio.url, playing]);

  useEffect(() => {
    if (songPlayer) {
      getAudioDuration(songPlayer?.audio.url)
        .then((duration: number) => setSeconds(Math.round(duration)))
        .catch(() => setSeconds(0))
        .finally(() => setLoading(false));
    }
  }, [songPlayer]);

  return {
    maxProgress: seconds,
    loading,
    songPlayer,
    audioRef,
    progress,
    onProgressUpdated,
    setCurrentProgress,
    play,
    pause,
    skipBackward,
    skipForward,
    playing,
  };
};
