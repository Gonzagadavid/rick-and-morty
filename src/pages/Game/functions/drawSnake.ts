import snakeR from '../mortyImages/snake.png';
import snakeL from '../mortyImages/snake-left.png';

type Params = {
  context: CanvasRenderingContext2D | null | undefined,
  x: number,
  y: number,
  up: boolean
}

// snake 350

type DrawSnake = (params: Params) => void

const snakeRight = new Image(350, 350);
snakeRight.src = snakeR;

const snakeLeft = new Image(350, 350);
snakeLeft.src = snakeL;

export const drawSnake: DrawSnake = ({
  context, x, y, up,
}) => {
  const image = up ? snakeRight : snakeLeft;
  context?.drawImage(image, x, y);
};
