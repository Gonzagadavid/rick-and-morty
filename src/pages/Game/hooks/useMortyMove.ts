import {
  KeyboardEvent, useCallback, useEffect, useState,
} from 'react';
import { drawMorty } from '../functions/drawMorty';

type MortyMoveParams = {
  context: CanvasRenderingContext2D | null | undefined,
  start: boolean,
  gameOver: boolean,
}

const initialMorty = {
  xInit: 1000,
  yInit: 230,
  rightInit: false,
  upInit: true,
};

export const useMortyMove = ({ context, start, gameOver } : MortyMoveParams) => {
  const {
    xInit, yInit, rightInit, upInit,
  } = initialMorty;

  const [up, setup] = useState(upInit);
  const [right, setRight] = useState(rightInit);
  const [MortyX, setMortyX] = useState(xInit);
  const [MortyY, setMortyY] = useState(yInit);

  useEffect(() => {
    context?.clearRect(MortyX - 50, MortyY - 50, 266, 340);
    drawMorty({
      context, x: MortyX, y: MortyY, up, right,
    });
  }, [MortyX, MortyY, up, right, start]);

  const keyEvent = (event:KeyboardEvent<HTMLDivElement>) => {
    if (gameOver) return;
    if ((event.code === 'ArrowUp' || event.code === 'Numpad8' || event.code === 'w') && MortyY - 30 > -40) {
      setup(true);
      setMortyY((prev) => prev - 30);
    }
    if ((event.code === 'ArrowDown' || event.code === 'Numpad2' || event.code === 's') && MortyY + 30 < 470) {
      setup(false);
      setMortyY((prev) => prev + 30);
    }
    if ((event.code === 'ArrowLeft' || event.code === 'Numpad4' || event.code === 'a') && MortyX - 30 > -40) {
      setRight(false);
      setup(true);
      setMortyX((prev) => prev - 30);
    }
    if ((event.code === 'ArrowRight' || event.code === 'Numpad6' || event.code === 'd') && MortyX + 30 < 1080) {
      setRight(true);
      setup(false);
      setMortyX((prev) => prev + 30);
    }
    if ((event.code === 'Numpad9' || event.code === 'e') && MortyX + 30 < 800 && MortyY - 30 > -40) {
      setRight(true);
      setup(false);
      setMortyX((prev) => prev + 30);
      setMortyY((prev) => prev - 30);
    }
    if ((event.code === 'Numpad7' || event.code === 'q') && MortyX - 30 > -40 && MortyY - 30 > -40) {
      setRight(false);
      setup(false);
      setMortyX((prev) => prev - 30);
      setMortyY((prev) => prev - 30);
    }
    if ((event.code === 'Numpad1' || event.code === 'z') && MortyX - 30 > -40 && MortyY + 30 < 470) {
      setRight(false);
      setup(false);
      setMortyX((prev) => prev - 30);
      setMortyY((prev) => prev + 30);
    }
    if ((event.code === 'Numpad3' || event.code === 'c') && MortyX + 30 < 800 && MortyY + 30 < 470) {
      setRight(true);
      setup(false);
      setMortyX((prev) => prev + 30);
      setMortyY((prev) => prev + 30);
    }
  };

  const resetPosition = useCallback(() => {
    setMortyX(xInit);
    setMortyY(yInit);
    setRight(rightInit);
    setup(upInit);
  }, []);

  return {
    MortyX, MortyY, keyEvent, resetPosition, right,
  };
};
