import { Container, Pause, Play, SkipBackward, SkipForward } from './styles';
import { PlayerControlsProps } from './types';

export const PlayerControls = ({
  className,
  playing = false,
}: PlayerControlsProps) => (
  <Container className={className}>
    <SkipForward icon="skip-forward" />
    {playing ? (
      <Pause icon="pause" variant="light" />
    ) : (
      <Play icon="play" variant="light" />
    )}
    <SkipBackward icon="skip-backward" />
  </Container>
);
