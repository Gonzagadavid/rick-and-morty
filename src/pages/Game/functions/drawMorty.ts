import mortyUP from '../mortyImages/morty-up/0.gif';
import mortyDOWN from '../mortyImages/transaction/70.gif';

type Params = {
  context: CanvasRenderingContext2D | null | undefined,
  x: number,
  y: number,
  up: boolean
}

// snake 350

type DrawMorty = (params: Params) => void

const mortyUp = new Image(333, 480);
mortyUp.src = mortyUP;

const mortyDown = new Image(333, 480);
mortyDown.src = mortyDOWN;

export const drawMorty: DrawMorty = ({
  context, x, y, up,
}) => {
  const image = up ? mortyUp : mortyDown;
  context?.drawImage(image, x, y);
};
