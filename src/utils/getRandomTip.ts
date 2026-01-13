import { TIPS_LIST } from 'src/constants';

export const getRandomTip = () => {
  const randomIndex = Math.floor(Math.random() * TIPS_LIST.length);

  return TIPS_LIST[randomIndex];
};
