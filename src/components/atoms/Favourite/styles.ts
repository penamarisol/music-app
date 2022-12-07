import styled from 'styled-components';

export const Container = styled.button`
  width: 2.313rem;
  height: 1.5rem;
  border: none;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.5rem;
  border-radius: 2.75rem;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  :hover {
    svg {
      path {
        fill: ${({ theme }) => theme.color.geraldine900};
      }
    }
  }
`;
