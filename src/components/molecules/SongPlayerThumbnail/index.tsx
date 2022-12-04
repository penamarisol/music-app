import {
  Container,
  SongDescription,
  SongTitle,
  TextContainer,
  Thumbnail,
} from './styles';
import { SongPlayerThumbnailProps } from './types';

export const SongPlayerThumbnail = ({
  className,
  url,
  alt,
  title,
  description,
}: SongPlayerThumbnailProps) => (
  <Container className={className}>
    <Thumbnail size="small" url={url} alt={alt} />
    <TextContainer>
      <SongTitle tag="p" variant="body2">
        {title}
      </SongTitle>
      <SongDescription tag="p" variant="caption">
        {description}
      </SongDescription>
    </TextContainer>
  </Container>
);
