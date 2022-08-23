import { Typography, Box, Avatar } from '@mui/material';
import {
  Dispatch,
  FC, SetStateAction, useEffect, useRef,
} from 'react';
import arrowKeys from 'images/controls.png';
import { styles } from './styles';

interface TimerProps {
  start: boolean,
  time: number,
  setTime: Dispatch<SetStateAction<number>>
  level: number
  topLevel: { level: number}
}
const INTERVAL = 1000;
const INCREMENT = 1;
const TIME_CONVERT = 60;
const UNIT_MAX = 9;

const TimerComponent:FC<TimerProps> = ({
  start, time, setTime, level, topLevel,
}) => {
  const interval = useRef(setInterval(() => {}, 0));

  useEffect(() => {
    if (start) {
      interval.current = setInterval(() => {
        setTime((prev) => prev + INCREMENT);
      }, INTERVAL);
    }

    return () => clearInterval(interval.current);
  }, [start]);

  useEffect(() => {
    if (!start) {
      clearInterval(interval.current);
    }
  }, [start]);

  const minutes = time / TIME_CONVERT > UNIT_MAX ? Math.floor(time / TIME_CONVERT) : `0${Math.floor(time / TIME_CONVERT)}`;
  const seconds = time % TIME_CONVERT > UNIT_MAX ? time % TIME_CONVERT : `0${time % TIME_CONVERT}`;
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>{`Level: ${level}`}</Typography>
      <Typography sx={styles.text}>{`${minutes}: ${seconds}`}</Typography>
      <Typography sx={styles.text}>{`Top Level: ${topLevel.level}`}</Typography>
      <Avatar sx={styles.image} src={arrowKeys} variant="square" alt="controls" />

    </Box>
  );
};

export const Timer = TimerComponent;
