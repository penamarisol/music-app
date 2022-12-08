import { ControlType } from '$/components/molecules/PlayerControls/types';

import { useLogic } from './logic';
import {
  Container,
  PlayerControls,
  PlayerProgressBar,
  SongPlayerThumbnail,
  SongPlayerThumbnailPlaceholder,
  Wrapper,
} from './styles';
import { PlayerProps } from './types';

export const Player = ({ className }: PlayerProps) => {
  const {
    songPlayer,
    maxProgress,
    progress,
    audioRef,
    playing,
    play,
    pause,
    skipBackward,
    skipForward,
    setCurrentProgress,
  } = useLogic();

  const switchPlayerActions = (action: ControlType) => {
    switch (action) {
      case ControlType.PLAY:
        play();
        break;
      case ControlType.PAUSE:
        pause();
        break;
      case ControlType.SKIP_FORWARD:
        skipForward();
        break;
      case ControlType.SKIP_BACKWARD:
        skipBackward();
        break;
    }
  };

  return (
    <Container className={className}>
      {songPlayer ? (
        <SongPlayerThumbnail
          url={songPlayer?.image.url}
          alt={songPlayer?.image.alt}
          title={songPlayer.title}
          description={songPlayer.author}
        />
      ) : (
        <SongPlayerThumbnailPlaceholder />
      )}
      <Wrapper>
        <audio
          ref={audioRef}
          src={songPlayer?.audio.url}
          onTimeUpdate={setCurrentProgress}
          onEnded={skipForward}
        />
        <PlayerControls
          onClickControl={switchPlayerActions}
          playing={playing}
        />
        <PlayerProgressBar progress={progress} maxProgress={maxProgress} />
      </Wrapper>
    </Container>
  );
};
