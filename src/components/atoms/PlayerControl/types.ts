import { Colors } from '$/styles/themes/theme';

export type PlayerControlIcon =
  | 'play'
  | 'pause'
  | 'skip-forward'
  | 'skip-backward';

export type PlayerControlSize = 'regular' | 'small';
export type PlayerControlVariant = 'dark' | 'light';

export type VariantTheme = {
  color: Colors;
  backgroundColor: Colors;
};
export type SizeTheme = {
  buttonSize: string;
  iconSize: string;
};

export type PlayerControlProps = {
  className?: string;
  icon: PlayerControlIcon;
  size?: PlayerControlSize;
  variant?: PlayerControlVariant;
};

export type $StyledProps = {
  $size: PlayerControlProps['size'];
  $variant: PlayerControlProps['variant'];
};
