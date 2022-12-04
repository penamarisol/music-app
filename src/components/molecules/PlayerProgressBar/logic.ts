const SECONDS_IN_ONE_MINUTE = 60;

export const useLogic = () => {
  const convertSecondsToMinutes = (seconds: number) => {
    const floor = Math.floor(seconds / SECONDS_IN_ONE_MINUTE);
    const rest = seconds - floor * SECONDS_IN_ONE_MINUTE;
    return `${floor}:${rest.toString().padStart(2, '0')}`;
  };

  return {
    convertSecondsToMinutes,
  };
};
