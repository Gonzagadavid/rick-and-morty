/* eslint-disable react/no-array-index-key */
import { Box } from '@mui/material';
import {
  FC, useCallback, useEffect, useRef, useState,
} from 'react';
import gameOverImg from 'images/game/gameOver.png';
import { Snake } from './Snake';
import './style.css';
import { useMortyMove } from './hooks/useMortyMove';

const gameOverScreen = new Image();
gameOverScreen.src = gameOverImg;

const Game: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [number, _setNumber] = useState(1);
  const context = canvas.current?.getContext('2d');
  const { MortyX, MortyY, keyEvent } = useMortyMove({ context, start, gameOver });

  const checkCollision = useCallback((x: number, y: number) => {
    if (x + 140 > MortyX + 60 && x + 40 < MortyX + 120
      && y + 10 > MortyY + 10 && MortyY + 220 > y + 60) {
      setStart(false);
      setGameOver(true);
    }
  }, [MortyX, MortyY]);

  useEffect(() => {
    if (!gameOver) return;
    context?.drawImage(gameOverScreen, 0, 0, 1200, 680);
  }, [gameOver]);

  const changeStart = useCallback(() => {
    context?.clearRect(0, 0, 1200, 680);
    setStart(true);
    setGameOver(false);
  }, [context]);

  return (
    <Box className="container" tabIndex={0} onKeyDown={keyEvent} onClick={changeStart}>
      <canvas className="Canvas" width="1200" height="680" ref={canvas} />
      { start && Array(number).fill('').map((_, index) => (
        <Snake
          key={index.toString()}
          setStart={checkCollision}
        />
      ))}
    </Box>
  );
};

export default Game;
