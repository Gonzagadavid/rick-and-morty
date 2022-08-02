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
  const [right, setRight] = useState(false);
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
    context?.clearRect(MortyX - 50, MortyY - 50, 266, 340);
    drawMorty({
      context, x: MortyX, y: MortyY, up, right,
    });
  }, [MortyX, MortyY, up, right]);
  useEffect(() => {
    if (snakeX > 1050) setSnakeLeft(true);
    if (snakeX < -20) setSnakeLeft(false);
    if (snakeY > 480) setSnakeUp(true);
    if (snakeY < -20) setSnakeUp(false);
    context2?.clearRect(snakeX - 50, snakeY - 80, 400, 500);
    drawSnake({
      context: context2, x: snakeX, y: snakeY, up: !snakeLeft,
    });
  }, [snakeX, snakeX, setSnakeLeft, setSnakeUp]);

  useEffect(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setSnakeY((prev) => (snakeUp ? prev - 50 : prev + 50));
      setSnakeX((prev) => (snakeLeft ? prev - 25 : prev + 30));
    }, 100);

    return () => clearInterval(interval.current);
  }, [snakeUp, snakeLeft]);

  const keyEvent = (event:KeyboardEvent<HTMLDivElement>) => {
    if ((event.code === 'ArrowUp' || event.code === 'Numpad8') && MortyY - 30 > -40) {
      setup(true);
      setMortyY((prev) => prev - 30);
    }
    if ((event.code === 'ArrowDown' || event.code === 'Numpad2') && MortyY + 30 < 470) {
      setup(false);
      setMortyY((prev) => prev + 30);
    }
    if ((event.code === 'ArrowLeft' || event.code === 'Numpad4') && MortyX - 30 > -40) {
      setRight(false);
      setup(true);
      setMortyX((prev) => prev - 30);
    }
    if ((event.code === 'ArrowRight' || event.code === 'Numpad6') && MortyX + 30 < 1080) {
      setRight(true);
      setup(false);
      setMortyX((prev) => prev + 30);
    }
    if (event.code === 'Numpad9' && MortyX + 30 < 800 && MortyY - 30 > -40) {
      setRight(true);
      setup(false);
      setMortyX((prev) => prev + 30);
      setMortyY((prev) => prev - 30);
    }
    if (event.code === 'Numpad7' && MortyX - 30 > -40 && MortyY - 30 > -40) {
      setRight(false);
      setup(false);
      setMortyX((prev) => prev - 30);
      setMortyY((prev) => prev - 30);
    }
    if (event.code === 'Numpad1' && MortyX - 30 > -40 && MortyY + 30 < 470) {
      setRight(false);
      setup(false);
      setMortyX((prev) => prev - 30);
      setMortyY((prev) => prev + 30);
    }
    if (event.code === 'Numpad3' && MortyX + 30 < 800 && MortyY + 30 < 470) {
      setRight(true);
      setup(false);
      setMortyX((prev) => prev + 30);
      setMortyY((prev) => prev + 30);
    }
  };

  return (
    <Box className="container" tabIndex={0} onKeyDown={keyEvent}>
      <canvas className="Canvas" width="1200" height="680" ref={canvas} />
      <canvas className="cv" width="1200" height="680" ref={canvas2} />
    </Box>
  );
};

export default Game;
