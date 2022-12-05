import {
  Container,
  PlayerControls,
  PlayerProgressBar,
  SongPlayerThumbnail,
  Wrapper,
} from './styles';
import { PlayerProps } from './types';

export const Player = ({
  className,
  url,
  alt,
  title,
  description,
  progress,
  maxProgress,
}: PlayerProps) => (
  <Container className={className}>
    <SongPlayerThumbnail
      url={url}
      alt={alt}
      title={title}
      description={description}
    />
    <Wrapper>
      <PlayerControls />
      <PlayerProgressBar progress={progress} maxProgress={maxProgress} />
    </Wrapper>
  </Container>
);
