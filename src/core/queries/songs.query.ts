import { gql } from '@apollo/client';

export const getSongsQuery = gql`
  query {
    songs {
      songs {
        id
        name
        description
        genre
        image
        author {
          id
          name
        }
        audio {
          id
          url
        }
      }
    }
  }
`;
