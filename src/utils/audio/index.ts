export const getAudioDuration = (url: string): Promise<number> =>
  new Promise((resolve, _) => {
    const audio = new Audio(url);
    audio.onloadedmetadata = () => resolve(audio.duration);
    audio.onerror = () => resolve(0);
  });
