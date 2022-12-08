import { Favourite as DefaultFavourite } from '$/components/atoms/Favourite';
import { loopShadow } from '$/styles/utils/mixins';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  border: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1.313rem;
  padding: 0.625rem;
`;

export const DescriptionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  max-width: 15rem;

  ${from['mobile']} {
    max-width: 37.5rem;
  }
`;
export const Favourite = styled(DefaultFavourite)`
  svg {
    path {
      fill: ${({ theme }) => theme.color.grayscale300};
    }
  }
`;
export const ImageContainer = styled.div`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.color.grayscale100};
  ${loopShadow};
`;

export const SongTitle = styled.div`
  width: 4rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.color.grayscale100};
  ${loopShadow};

  ${from['mobile']} {
    width: 6rem;
  }
`;

export const SongAuthor = styled.div`
  width: 6rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.color.grayscale100};
  ${loopShadow};

  ${from['mobile']} {
    width: 8rem;
  }
`;

export const SongDescription = styled.div`
  width: 10rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.grayscale100};
  ${loopShadow};

  ${from['mobile']} {
    width: 30rem;
  }
`;

export const SongOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;
`;

export const SongPlay = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.grayscale100};
  ${loopShadow};
`;

export const SongDuration = styled.div`
  width: 6rem;
  height: 1.5rem;
  border-radius: 2.938rem;
  background-color: ${({ theme }) => theme.color.grayscale100};
  ${loopShadow};
`;

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  border: none;
  display: inline-flex;
  flex-direction: column;
  gap: 1.313rem;
  padding: 0.625rem;

  ${from['mobile']} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
