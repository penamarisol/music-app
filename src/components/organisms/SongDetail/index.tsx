import { ControlType } from '$/components/molecules/SongDescription/types';

import { useLogic } from './logic';
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

export const SongDetail = ({ className, song }: SongDetailProps) => {
  const {
    seconds,
    loading,
    isFavourite,
    toggleFavourite,
    isSongPlaying,
    play,
    pause,
  } = useLogic(song);

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

  return (
    <Container className={className} data-cy="song-detail">
      <Wrapper>
        <Image url={song.image.url} alt={song.image.alt} />
        <DescriptionContainer>
          <Text tag="h3" variant="bodyBold" color="grayscale900">
            {song.title}
          </Text>
          <Text tag="h4" variant="body2Medium" color="grayscale700">
            {song.author}
          </Text>
          <Text tag="p" variant="body2" color="grayscale700">
            {song.description}
          </Text>
          <SongDescription
            genre={song.genre}
            seconds={seconds}
            playing={isSongPlaying}
            onClickControl={switchPlayerActions}
            loading={loading}
          />
        </DescriptionContainer>
      </Wrapper>
      <Favourite
        icon={isFavourite ? 'heart-fill' : 'heart-add-outline'}
        onClickFavourite={toggleFavourite}
      />
    </Container>
  );
};
