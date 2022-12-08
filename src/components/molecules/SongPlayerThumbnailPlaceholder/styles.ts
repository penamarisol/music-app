import { loopShadow } from '$/styles/utils/mixins';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: auto;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.color.grayscale900};
`;

export const ImageContainer = styled.div`
  width: 3rem;
  height: 3rem;
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

export const TextContainer = styled.div`
  display: none;

  ${from['mobile']} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.625rem;
  }
`;
