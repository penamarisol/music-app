import { Text } from '$/components/atoms/Text';
import { Player } from '$/components/organisms/Player';
import { SongDetailPlaceholder } from '$/components/organisms/SongDetailPlaceholder';
import { SongsList } from '$/components/organisms/SongList';
import { usePlayList } from '$/context/PlayList';

import {
  Container,
  PlayerContainer,
  PlayListContainer,
  SearchInput,
  Wrapper,
} from './styles';

function HomeView(): JSX.Element {
  const { playList, loading } = usePlayList();

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <Wrapper>
        <Text tag="h2" variant="title2">
          Featured songs
        </Text>
        <PlayListContainer $prettyScrollbar={true}>
          {loading ? (
            Array.from(Array(5).keys()).map((_, index) => (
              <SongDetailPlaceholder key={`song-placeholder-${index}`} />
            ))
          ) : (
            <SongsList songs={playList} />
          )}
        </PlayListContainer>
      </Wrapper>
      <PlayerContainer>
        <Player />
      </PlayerContainer>
    </Container>
  );
}

export default HomeView;
