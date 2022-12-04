import { Text as DefaultText } from '$/components/atoms/Text';
import styled from 'styled-components';

export const Container = styled.span`
  width: auto;
  height: auto;
  display: inline-block;
  background-color: ${({ theme }) => theme.color.malibu100};
  padding: 0.25rem 0.5rem;
  border-radius: 2.938rem;
`;

export const Text = styled(DefaultText)`
  color: ${({ theme }) => theme.color.grayscale900};
`;
