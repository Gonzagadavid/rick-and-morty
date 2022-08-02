import mortyUP from 'images/game/mini/morty-up.gif';
import mortyRightUP from 'images/game/mini/morty-right-up.gif';
import mortyDOWN from 'images/game/mini/morty-down.gif';
import mortyRightDOWN from 'images/game/mini/morty-right-down.gif';

type Params = {
  context: CanvasRenderingContext2D | null | undefined,
  x: number,
  y: number,
  up: boolean,
  right: boolean,
}

type DrawMorty = (params: Params) => void

const mortyUp = new Image(166, 240);
mortyUp.src = mortyUP;

const mortyRightUp = new Image(166, 240);
mortyRightUp.src = mortyRightUP;

const mortyDown = new Image(166, 240);
mortyDown.src = mortyDOWN;

const mortyRightDown = new Image(166, 240);
mortyRightDown.src = mortyRightDOWN;

const rightImage = {
  up: mortyRightUp,
  down: mortyRightDown,
};

const leftImage = {
  up: mortyUp,
  down: mortyDown,
};

export const drawMorty: DrawMorty = ({
  context, x, y, up, right,
}) => {
  const imageObj = right ? rightImage : leftImage;
  const key = up ? 'up' : 'down';

  const image = imageObj[key];
  context?.drawImage(image, x, y);
};
