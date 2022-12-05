import { Text } from '$/components/atoms/Text';
import { SongDetailPlaceholder } from '$/components/organisms/SongDetailPlaceholder';
import { SongsList } from '$/components/organisms/SongList';
import { usePlayList } from '$/context/PlayList';

import { Container, PlayListContainer, SearchInput, Wrapper } from './styles';

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
        <PlayListContainer>
          {loading ? (
            <>
              <SongDetailPlaceholder />
              <SongDetailPlaceholder />
              <SongDetailPlaceholder />
              <SongDetailPlaceholder />
              <SongDetailPlaceholder />
            </>
          ) : (
            <SongsList songs={playList} />
          )}
        </PlayListContainer>
      </Wrapper>
    </Container>
  );
}

export default HomeView;
