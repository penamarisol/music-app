export type ImageSize = 'regular' | 'small';

export type ImageProps = {
  className?: string;
  url: string;
  alt: string;
  size?: ImageSize;
};

export type $StyledProps = {
  $size: ImageProps['size'];
};
