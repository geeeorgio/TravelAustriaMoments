import { createContext, useContext } from 'react';

import { MAIN_BG_IMAGE } from 'src/constants';
import type { GameContextType } from 'src/types';

export const GameContext = createContext<GameContextType>({
  contextBackground: MAIN_BG_IMAGE,
  //
  isContextOnboardingCompleted: false,
  setIsContextOnboardingCompleted: async () => {
    console.warn('GameContext not initialized');
  },
  //
  contextFavourites: [],
  addContextFavourites: async () => {
    console.warn('GameContext not initialized');
  },
  removeFromContextFavourites: async () => {
    console.warn('GameContext not initialized');
  },
  //
  resetGameData: async () => {
    console.warn('GameContext not initialized');
  },
});

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context)
    throw new Error('useGameContext must be used within GameContextProvider');
  return context;
};
