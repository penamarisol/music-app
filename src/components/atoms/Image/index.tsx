import React from 'react';

import { Container } from './styles';
import { ImageProps } from './types';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, url, alt, size = 'regular' }, ref) => (
    <Container
      src={url}
      alt={alt}
      $size={size}
      className={className}
      ref={ref}
    />
  ),
);
