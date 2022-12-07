import { useLogic } from './logic';
import { Container, GenreLabel, Pause, Play, Text } from './styles';
import { SongDescriptionProps } from './types';

export const SongDescription = ({
  className,
  genre,
  seconds,
  playing = false,
  loading = false,
}: SongDescriptionProps) => {
  const { convertSecondsToMinutes } = useLogic();
  const songDurationInMinutes = convertSecondsToMinutes(seconds);

  return (
    <Container className={className}>
      {playing ? (
        <Pause icon="pause" size="small" />
      ) : (
        <Play icon="play" size="small" />
      )}
      {!loading && (
        <Text tag="p" variant="caption">
          {songDurationInMinutes} min
        </Text>
      )}
      <GenreLabel label={genre} />
    </Container>
  );
};
