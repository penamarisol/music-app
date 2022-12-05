import {
  Container,
  DescriptionContainer,
  Favourite,
  ImageContainer,
  SongAuthor,
  SongDescription,
  SongDuration,
  SongOptionsContainer,
  SongPlay,
  SongTitle,
  Wrapper,
} from './styles';
import { SongDetailPlaceholderProps } from './types';

export const SongDetailPlaceholder = ({
  className,
}: SongDetailPlaceholderProps) => (
  <Container className={className}>
    <Wrapper>
      <ImageContainer />
      <DescriptionContainer>
        <SongTitle />
        <SongAuthor />
        <SongDescription />
        <SongOptionsContainer>
          <SongPlay />
          <SongDuration />
        </SongOptionsContainer>
      </DescriptionContainer>
    </Wrapper>
    <Favourite icon="heart-fill" />
  </Container>
);
