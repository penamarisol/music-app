import { Container, Pause, Play, SkipBackward, SkipForward } from './styles';
import { ControlType, PlayerControlsProps } from './types';

export const PlayerControls = ({
  className,
  playing = false,
  onClickControl,
}: PlayerControlsProps) => (
  <Container className={className}>
    <SkipForward
      icon="skip-forward"
      onClickControl={() => onClickControl(ControlType.SKIP_FORWARD)}
    />
    {playing ? (
      <Pause
        icon="pause"
        variant="light"
        onClickControl={() => onClickControl(ControlType.PAUSE)}
      />
    ) : (
      <Play
        icon="play"
        variant="light"
        onClickControl={() => onClickControl(ControlType.PLAY)}
      />
    )}
    <SkipBackward
      icon="skip-backward"
      onClickControl={() => onClickControl(ControlType.SKIP_BACKWARD)}
    />
  </Container>
);
