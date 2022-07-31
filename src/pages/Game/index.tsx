/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box } from '@mui/material';
import {
  FC, KeyboardEvent, useEffect, useRef, useState,
} from 'react';
// import morty from 'images/gifs/morty.gif';
import './style.css';

const mortys = Array(211).fill('').map((_, i) => {
  const image = new Image(333, 480);
  image.src = require(`./mortyImages/frames/${i}.gif`);
  return image;
});
const Game: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const number = useRef(0);
  const [x, setX] = useState(10);
  const [y, setY] = useState(50);
  const image = new Image(333, 480);
  const context = canvas.current?.getContext('2d');
  useEffect(() => {
    if (canvas.current) {
      context?.drawImage(mortys[number.current], x, y);
    }
    number.current = number.current === 210 ? 0 : number.current + 1;
  }, [x, y, number, image]);

  const keyEvent = (event:KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'ArrowUp') {
      context?.clearRect(x, y, 333, 480);
      setY((prev) => prev - 10);
    }
    if (event.code === 'ArrowDown') {
      context?.clearRect(x, y, 333, 480);
      setY((prev) => prev + 10);
    }
    if (event.code === 'ArrowLeft') {
      context?.clearRect(x, y, 333, 480);
      setX((prev) => prev - 10);
    }
    if (event.code === 'ArrowRight') {
      context?.clearRect(x, y, 333, 480);
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
