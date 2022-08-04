import {
  Dispatch,
  FC, SetStateAction, useEffect, useRef, useState,
} from 'react';
import { drawSnake } from '../functions/drawSnake';
import '../style.css';

const randomSnakeX = () => Math.round(Math.random() * 1000);
const randomSnakeY = () => Math.round(Math.random() * 450);

interface SnakeProps {
  mortyX: number,
  mortyY: number,
  setStart: Dispatch<SetStateAction<boolean>>
  start: boolean,
}

export const Snake: FC<SnakeProps> = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [snakeX, setSnakeX] = useState(randomSnakeX());
  const [snakeY, setSnakeY] = useState(randomSnakeY());
  const [snakeUp, setSnakeUp] = useState(false);
  const [snakeLeft, setSnakeLeft] = useState(false);
  const interval = useRef(setInterval(() => {}, 0));
  const context = canvas.current?.getContext('2d');
  useEffect(() => {
    if (snakeX > 1050) setSnakeLeft(true);
    if (snakeX < -20) setSnakeLeft(false);
    if (snakeY > 480) setSnakeUp(true);
    if (snakeY < -20) setSnakeUp(false);
    context?.clearRect(snakeX - 50, snakeY - 80, 400, 500);
    drawSnake({
      context, x: snakeX, y: snakeY, up: !snakeLeft,
    });
  }, [snakeX, snakeX, setSnakeLeft, setSnakeUp]);

  useEffect(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setSnakeY((prev) => (snakeUp ? prev - 30 : prev + 30));
      setSnakeX((prev) => (snakeLeft ? prev - 15 : prev + 30));
    }, 120);

    return () => clearInterval(interval.current);
  }, [snakeUp, snakeLeft]);

  return (
    <canvas className="Snake" width="1200" height="680" ref={canvas} />
  );
};
