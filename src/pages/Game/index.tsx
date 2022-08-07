import { Box } from '@mui/material';
import {
  FC, useCallback, useEffect, useRef, useState,
} from 'react';
import gameOverImg from 'images/game/gameOver.png';
import { Timer } from 'pages/Game/Timer';
import { Snake } from './Snake';
import './style.css';
import { useMortyMove } from './hooks/useMortyMove';

const gameOverScreen = new Image();
gameOverScreen.src = gameOverImg;

const Game: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
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

  useEffect(() => {
    if (time % 20 === 0) {
      setLevel(1 + time / 20);
    }
  }, [time]);

  const changeStart = useCallback(() => {
    context?.clearRect(0, 0, 1200, 680);
    setTime(0);
    setStart(true);
    setGameOver(false);
  }, [context]);

  return (
    <Box className="Page">
      <Box className="container" tabIndex={0} onKeyDown={keyEvent} onClick={changeStart}>
        <canvas className="Canvas" width="1200" height="680" ref={canvas} />
        { start && Array(level).fill('').map((_, index) => (
          <Snake
            key={index.toString()}
            setStart={checkCollision}
          />
        ))}
      </Box>
      <Box>
        <Timer time={time} setTime={setTime} start={start} level={level} />
      </Box>
    </Box>
  );
};

export default Game;
