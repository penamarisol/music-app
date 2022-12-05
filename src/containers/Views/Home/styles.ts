import { SearchInput as DefaultSearchInput } from '$/components/molecules/SearchInput';
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
`;

export const PlayListContainer = styled.div`
  height: auto;

  ${from['tabletLandscape']} {
    height: calc(100vh - 23.125rem);
    overflow-y: scroll;
  }
`;
