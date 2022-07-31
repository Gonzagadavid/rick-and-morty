import mortyUP from '../mortyImages/morty-up/0.gif';
import mortDown from '../mortyImages/transaction/70.gif';

type Params = {
  context: CanvasRenderingContext2D | null | undefined,
  x: number,
  y: number,
  up: boolean
}

type DrawMorty = (params: Params) => void

export const drawMorty: DrawMorty = ({
  context, x, y, up,
}) => {
  const image = new Image(333, 480);
  image.src = up ? mortyUP : mortDown;
  context?.clearRect(x, y, 335, 480);
  context?.drawImage(image, x, y);
};
