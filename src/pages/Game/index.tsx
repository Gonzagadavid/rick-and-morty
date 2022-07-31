/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { Box } from '@mui/material';
import {
  FC, KeyboardEvent, useEffect, useRef, useState,
} from 'react';
import { drawMorty } from './functions/drawMorty';
import './style.css';

const Game: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const number = useRef(0);
  const [up, setup] = useState(true);
  const [x, setX] = useState(10);
  const [y, setY] = useState(50);
  const context = canvas.current?.getContext('2d');
  useEffect(() => {
    if (canvas.current) {
      drawMorty({
        context, x, y, up,
      });
    }
  }, [x, y, number, up]);

  const keyEvent = (event:KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'ArrowUp') {
      setup(true);
      setY((prev) => prev - 10);
    }
    if (event.code === 'ArrowDown') {
      setup(false);
      setY((prev) => prev + 10);
    }
    if (event.code === 'ArrowLeft') {
      setup(true);
      setX((prev) => prev - 10);
    }
    if (event.code === 'ArrowRight') {
      setup(false);
      setX((prev) => prev + 10);
    }
  };

  return (
    <Box>
      <div tabIndex={0} onKeyDown={keyEvent}>
        <canvas className="Canvas" width="1500" height="780" ref={canvas} />
      </div>
    </Box>
  );
};

export default Game;
