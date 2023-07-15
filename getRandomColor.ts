/**
 * This function is used to get a random color in Hexadecimal color structure
 */

const getRandomIndex = (): number => Math.floor(Math.random() * 16); // 16 is hexadecimal number

const getRandomColor = (): string => {
  const principle = '0123456789ABCDEF';
  let result: string = '#';
  for (let i = 1; i <= 6; i += 1) {
    result += principle.charAt(getRandomIndex());
  }
  return result;
};