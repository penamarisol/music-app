import styled, { css } from 'styled-components';

import { $StyledProps } from './types';

export const Container = styled.input<$StyledProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  border: none;
  height: 0.25rem;
  width: 29.75rem;

  ${({ theme, $sliderProgress }) =>
    $sliderProgress &&
    css`
      background: linear-gradient(
        to right,
        ${theme.color.malibu500} 1%,
        ${theme.color.malibu500} ${$sliderProgress}%,
        ${theme.color.grayscale700} ${$sliderProgress}%,
        ${theme.color.grayscale700} 100%
      );
    `}
  border-radius: 1.25rem;

  -webkit-appearance: none;

  ::-webkit-slider-thumb {
    width: 0.625rem;
    height: 0.625rem;
    -webkit-appearance: none;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.white};
  }

  ::-moz-range-thumb {
    width: 625rem;
    height: 625rem;
    -webkit-appearance: none;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.white};
  }
`;
