import { Container, SongCard } from './styles';
import { SongsListProps } from './types';

export const SongsList = ({ className, songs }: SongsListProps) => (
  <Container className={className}>
    {songs.map((song, index) => (
      <SongCard
        key={`song-element-${index}`}
        url={song.url}
        alt={song.alt}
        title={song.title}
        author={song.author}
        description={song.description}
        genre={song.genre}
        seconds={song.seconds}
      />
    ))}
  </Container>
);
