import {
  FC, memo, useEffect, useRef, useState,
} from 'react';
import { drawSnake } from '../functions/drawSnake';
import '../style.css';

const randomSnakeY = () => Math.round(Math.random() * 450);

interface SnakeProps {
  setStart: (x: number, y: number) => void,
}

const MAX_SNAKE_X = 1050;
const MAX_SNAKE_Y = 570;
const MIN_SNAKE = -20;
const SNAKE_MOVE = 30;
const INTERVAL_SNAKE = 120;
const CLEAR_X = 50;
const CLEAR_Y = 80;
const SNAKE_WIDTH = 400;
const SNAKE_HEIGHT = 500;

const SnakeComponent: FC<SnakeProps> = ({ setStart }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [snakeX, setSnakeX] = useState(10);
  const [snakeY, setSnakeY] = useState(randomSnakeY());
  const [snakeUp, setSnakeUp] = useState(false);
  const [snakeLeft, setSnakeLeft] = useState(false);
  const interval = useRef(setInterval(() => {}, 0));
  const context = canvas.current?.getContext('2d');
  useEffect(() => {
    if (snakeX > MAX_SNAKE_X) setSnakeLeft(true);
    setStart(snakeX, snakeY);
    if (snakeX < MIN_SNAKE) setSnakeLeft(false);
    if (snakeY > MAX_SNAKE_Y) setSnakeUp(true);
    if (snakeY < MIN_SNAKE) setSnakeUp(false);
    context?.clearRect(snakeX - CLEAR_X, snakeY - CLEAR_Y, SNAKE_WIDTH, SNAKE_HEIGHT);
    drawSnake({
      context, x: snakeX, y: snakeY, up: !snakeLeft,
    });
  }, [snakeX, snakeX, setSnakeLeft, setSnakeUp]);

  useEffect(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setSnakeY((prev) => (snakeUp ? prev - SNAKE_MOVE : prev + SNAKE_MOVE));
      setSnakeX((prev) => (snakeLeft ? prev - (SNAKE_MOVE / 2) : prev + SNAKE_MOVE));
    }, INTERVAL_SNAKE);

    return () => clearInterval(interval.current);
  }, [snakeUp, snakeLeft]);

  return (
    <canvas className="Snake" width="1200" height="680" ref={canvas} />
  );
};

export const Snake = memo(SnakeComponent);
