import {
  Container,
  ImageContainer,
  SongAuthor,
  SongTitle,
  TextContainer,
} from './styles';
import { SongPlayerThumbnailPlaceholderProps } from './types';

export const SongPlayerThumbnailPlaceholder = ({
  className,
}: SongPlayerThumbnailPlaceholderProps) => (
  <Container className={className}>
    <ImageContainer />
    <TextContainer>
      <SongTitle />
      <SongAuthor />
    </TextContainer>
  </Container>
);
