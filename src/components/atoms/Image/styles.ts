import styled, { css } from 'styled-components';

import { $StyledProps, ImageSize } from './types';

const sizeTheme: Record<ImageSize, string> = {
  regular: '8.75rem',
  small: '3rem',
};

export const Container = styled.img<$StyledProps>`
  ${({ $size }) =>
    $size &&
    css`
      width: ${sizeTheme[$size]};
      height: ${sizeTheme[$size]};
    `}
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
`;
