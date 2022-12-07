import { ControlType } from '$/components/molecules/PlayerControls/types';

import { useLogic } from './logic';
import {
  Container,
  PlayerControls,
  PlayerProgressBar,
  SongPlayerThumbnail,
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
    }
  };

  return songPlayer ? (
    <Container className={className}>
      <SongPlayerThumbnail
        url={songPlayer?.image.url}
        alt={songPlayer?.image.alt}
        title={songPlayer.title}
        description={songPlayer.author}
      />
      <Wrapper>
        <audio
          ref={audioRef}
          src={songPlayer.audio.url}
          onTimeUpdate={setCurrentProgress}
        />
        <PlayerControls
          onClickControl={switchPlayerActions}
          playing={playing}
        />
        <PlayerProgressBar progress={progress} maxProgress={maxProgress} />
      </Wrapper>
    </Container>
  ) : (
    <div>Hi, player</div>
  );
};
