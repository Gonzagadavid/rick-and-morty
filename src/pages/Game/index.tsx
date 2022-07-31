/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { Box } from '@mui/material';
import {
  FC, KeyboardEvent, useEffect, useRef, useState,
} from 'react';
import { drawMorty } from './functions/drawMorty';
import { drawSnake } from './functions/drawSnake';
import './style.css';

const Game: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const canvas2 = useRef<HTMLCanvasElement>(null);
  const [up, setup] = useState(true);
  const [MortyX, setMortyX] = useState(1000);
  const [MortyY, setMortyY] = useState(230);
  const [snakeX, setSnakeX] = useState(20);
  const [snakeY, setSnakeY] = useState(20);
  const [snakeUp, setSnakeUp] = useState(false);
  const [snakeLeft, setSnakeLeft] = useState(false);
  const interval = useRef(setInterval(() => {}, 0));
  const context = canvas.current?.getContext('2d');
  const context2 = canvas2.current?.getContext('2d');
  useEffect(() => {
    context?.clearRect(MortyX, MortyY - 20, 373, 520);
    drawMorty({
      context, x: MortyX, y: MortyY, up,
    });
  }, [MortyX, MortyY, up]);
  useEffect(() => {
    if (snakeX > 1200) setSnakeLeft(true);
    if (snakeX < -40) setSnakeLeft(false);
    if (snakeY > 440) setSnakeUp(true);
    if (snakeY < -40) setSnakeUp(false);
    context2?.clearRect(snakeX, snakeY - 20, 350, 370);
    drawSnake({
      context: context2, x: snakeX, y: snakeY, up: !snakeLeft,
    });
  }, [snakeX, snakeX, setSnakeLeft, setSnakeUp]);

  useEffect(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      console.log(snakeUp);
      setSnakeY((prev) => (snakeUp ? prev - 20 : prev + 20));
      setSnakeX((prev) => (snakeLeft ? prev - 20 : prev + 20));
    }, 100);

    return () => clearInterval(interval.current);
  }, [snakeUp, snakeLeft]);

  const keyEvent = (event:KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'ArrowUp' && MortyY - 20 > -40) {
      setup(true);
      setMortyY((prev) => prev - 20);
    }
    if (event.code === 'ArrowDown' && MortyY + 20 < 350) {
      setup(false);
      setMortyY((prev) => prev + 20);
    }
    if (event.code === 'ArrowLeft' && MortyX - 20 > -40) {
      setup(true);
      setMortyX((prev) => prev - 20);
    }
    if (event.code === 'ArrowRight' && MortyX + 20 < 1200) {
      setup(false);
      setMortyX((prev) => prev + 20);
    }
  };

  return (
    <Box>
      <div className="container" tabIndex={0} onKeyDown={keyEvent} role="button">
        <canvas className="Canvas" width="1500" height="780" ref={canvas} />
        <canvas className="cv" width="1500" height="780" ref={canvas2} />
      </div>
    </Box>
  );
};

export default Game;
