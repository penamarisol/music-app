import {
  Container,
  DescriptionContainer,
  Favourite,
  Image,
  SongDescription,
  Text,
  Wrapper,
} from './styles';
import { SongDetailProps } from './types';

export const SongDetail = ({
  className,
  url,
  alt,
  title,
  author,
  description,
  genre,
  seconds,
  playing = false,
  icon = 'heart-add-outline',
}: SongDetailProps) => (
  <Container className={className}>
    <Wrapper>
      <Image url={url} alt={alt} />
      <DescriptionContainer>
        <Text tag="h3" variant="bodyBold" color="grayscale900">
          {title}
        </Text>
        <Text tag="h4" variant="body2Medium" color="grayscale700">
          {author}
        </Text>
        <Text tag="p" variant="body2" color="grayscale700">
          {description}
        </Text>
        <SongDescription genre={genre} seconds={seconds} playing={playing} />
      </DescriptionContainer>
    </Wrapper>
    <Favourite icon={icon} />
  </Container>
);
