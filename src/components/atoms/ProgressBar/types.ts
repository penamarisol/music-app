export type ProgressBarProps = {
  className?: string;
  progress: number;
  maxProgress: number;
  onChange: (progress: number) => void;
};

export type $StyledProps = {
  $sliderProgress: number;
};
