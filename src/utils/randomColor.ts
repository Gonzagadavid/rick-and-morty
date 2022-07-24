function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function generateRGBA(percent: number) {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  return `rgba(${red}, ${green}, ${blue}, ${percent})`;
}
