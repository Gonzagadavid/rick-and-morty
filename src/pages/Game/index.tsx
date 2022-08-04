/* eslint-disable react/no-array-index-key */
import { Box } from '@mui/material';
import {
  FC, KeyboardEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import { drawMorty } from './functions/drawMorty';
import { Snake } from './Snake';
import './style.css';

const Game: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [start, _setStart] = useState(false);
  const [up, setup] = useState(true);
  const [number, _setNumber] = useState(1);
  const [right, setRight] = useState(false);
  const [MortyX, setMortyX] = useState(1000);
  const [MortyY, setMortyY] = useState(230);
  const context = canvas.current?.getContext('2d');
  useEffect(() => {
    context?.clearRect(MortyX - 50, MortyY - 50, 266, 340);
    drawMorty({
      context, x: MortyX, y: MortyY, up, right,
    });
  }, [MortyX, MortyY, up, right, start]);

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

  const changeStart = useCallback(() => {
    _setStart(true);
  }, []);

  return (
    <Box className="container" tabIndex={0} onKeyDown={keyEvent} onClick={changeStart}>
      <canvas className="Canvas" width="1200" height="680" ref={canvas} />
      { start && Array(number).fill('').map((_, index) => (
        <Snake
          key={index.toString()}
          mortyX={MortyX}
          mortyY={MortyY}
          setStart={_setStart}
          start={start}
        />
      ))}
    </Box>
  );
};

export default Game;
