import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { MAIN_BG_IMAGE, PLACES_LIST } from 'src/constants';
import { GameContext } from 'src/hooks/useGameContext';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [favouritesList, setFavouritesList] = useState<[]>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const [savedOnboarding, savedFavourites] = await Promise.all([
          getItemFromStorage<boolean>('isOnboardingCompleted'),
          getItemFromStorage<[]>('favouritePlacesList'),
        ]);

        if (savedOnboarding !== null) setOnboardingDone(savedOnboarding);
        if (savedFavourites) setFavouritesList(savedFavourites);
      } catch (e) {
        console.error('Context init error:', e);
      }
    };
    init();
  }, []);

  const setIsContextOnboardingCompleted = useCallback(async (val: boolean) => {
    setOnboardingDone(val);
    await setItemInStorage('isOnboardingCompleted', val);
  }, []);

  const addContextFavourites = useCallback(
    async (id: string) => {
      const place = PLACES_LIST.find((p) => p.id === id);
      if (place) {
        const newList = [...favouritesList, place];

        setFavouritesList(newList);
        await setItemInStorage('favouritePlacesList', newList);
      }
    },
    [favouritesList],
  );

  const removeFromContextFavourites = useCallback(
    async (id: string) => {
      const newList = favouritesList.filter((p) => p.id !== id);

      setFavouritesList(newList);
      await setItemInStorage('favouritePlacesList', newList);
    },
    [favouritesList],
  );

  const resetGameData = useCallback(async () => {}, []);

  const contextValue = useMemo(
    () => ({
      contextBackground: MAIN_BG_IMAGE,
      isContextOnboardingCompleted: onboardingDone,
      setIsContextOnboardingCompleted,
      contextFavourites: favouritesList,
      addContextFavourites,
      removeFromContextFavourites,
      resetGameData,
    }),
    [
      onboardingDone,
      setIsContextOnboardingCompleted,
      favouritesList,
      addContextFavourites,
      removeFromContextFavourites,
      resetGameData,
    ],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
