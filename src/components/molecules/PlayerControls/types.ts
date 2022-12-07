export enum ControlType {
  PLAY = 'play',
  PAUSE = 'pause',
  SKIP_FORWARD = 'skip-forward',
  SKIP_BACKWARD = 'skip-backward',
}

export type PlayerControlsProps = {
  className?: string;
  playing?: boolean;
  onClickControl: (controlType: ControlType) => void;
};
