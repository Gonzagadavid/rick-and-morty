import { KeyboardEvent, useEffect, useState } from 'react';
import { drawMorty } from '../functions/drawMorty';

type MortyMoveParams = {
  context: CanvasRenderingContext2D | null | undefined,
  start: boolean,
  gameOver: boolean,
}

export const useMortyMove = ({ context, start, gameOver } : MortyMoveParams) => {
  const [up, setup] = useState(true);
  const [right, setRight] = useState(false);
  const [MortyX, setMortyX] = useState(1000);
  const [MortyY, setMortyY] = useState(230);

  useEffect(() => {
    context?.clearRect(MortyX - 50, MortyY - 50, 266, 340);
    drawMorty({
      context, x: MortyX, y: MortyY, up, right,
    });
  }, [MortyX, MortyY, up, right, start]);

  const keyEvent = (event:KeyboardEvent<HTMLDivElement>) => {
    if (gameOver) return;
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

  return { MortyX, MortyY, keyEvent };
};
