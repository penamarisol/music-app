import { SearchInput as DefaultSearchInput } from '$/components/molecules/SearchInput';
import { prettyScrollbar } from '$/styles/utils/mixins';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.article`
  padding-block: 2.5rem 6.3rem;
`;

export const SearchInput = styled(DefaultSearchInput)`
  margin-block-start: 1.375rem;
`;

export const Wrapper = styled.div`
  padding-top: 2.5rem;

  h2 {
    padding-bottom: 0.875rem;
  }
`;

export const PlayListContainer = styled.div<{ $prettyScrollbar: boolean }>`
  height: auto;

  ${from['tabletLandscape']} {
    height: calc(100vh - 23.125rem);
    overflow-y: scroll;
    ${({ $prettyScrollbar }) =>
      $prettyScrollbar && prettyScrollbar({ vertical: false, size: '15rem' })}
  }
`;

export const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 90%;
  left: 5%;

  ${from['tabletLandscape']} {
    width: 100%;
    left: 0;
  }
`;
