export type PlayerProgressBarProps = {
  className?: string;
  progress: number;
  maxProgress: number;
  onChangeProgress?: (progress: number) => void;
};
