import { Typography, Box } from '@mui/material';
import {
  Dispatch,
  FC, SetStateAction, useEffect, useRef,
} from 'react';
import { styles } from './styles';

interface TimerProps {
  start: boolean,
  time: number,
  setTime: Dispatch<SetStateAction<number>>
  level: number
  topLevel: { level: number}
}

const TimerComponent:FC<TimerProps> = ({
  start, time, setTime, level, topLevel,
}) => {
  const interval = useRef(setInterval(() => {}, 0));

  useEffect(() => {
    if (start) {
      interval.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, [start]);

  useEffect(() => {
    if (!start) {
      clearInterval(interval.current);
    }
  }, [start]);

  const minutes = time / 60 > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`;
  const seconds = time % 60 > 9 ? time % 60 : `0${time % 60}`;
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>{`Level: ${level}`}</Typography>
      <Typography sx={styles.text}>{`${minutes}: ${seconds}`}</Typography>
      <Typography sx={styles.text}>{`Top Level: ${topLevel.level}`}</Typography>
    </Box>
  );
};

export const Timer = TimerComponent;
