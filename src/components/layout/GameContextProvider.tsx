import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { MAIN_BG_IMAGE } from 'src/constants';
import { GameContext } from 'src/hooks/useGameContext';
import type { LocationType, RouteType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [favouritesList, setFavouritesList] = useState<
    (LocationType | RouteType)[]
  >([]);

  useEffect(() => {
    const init = async () => {
      try {
        const [savedOnboarding, savedFavourites] = await Promise.all([
          getItemFromStorage<boolean>('isOnboardingCompleted'),
          getItemFromStorage<(LocationType | RouteType)[]>(
            'favouritePlacesList',
          ),
        ]);

        if (savedOnboarding !== null) setOnboardingDone(savedOnboarding);
        if (savedFavourites && Array.isArray(savedFavourites)) {
          setFavouritesList(savedFavourites);
        }
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
    async (item: LocationType | RouteType) => {
      const isAlreadyInFavourites = favouritesList.some(
        (fav) => fav.id === item.id,
      );
      if (isAlreadyInFavourites) {
        console.log('Item already in favourites:', item.id);
        return;
      }

      const newList = [...favouritesList, item];
      setFavouritesList(newList);
      await setItemInStorage('favouritePlacesList', newList);
      console.log('Added to favourites:', item.title);
    },
    [favouritesList],
  );

  const removeFromContextFavourites = useCallback(
    async (id: string) => {
      const newList = favouritesList.filter((p) => p.id !== id);
      setFavouritesList(newList);
      await setItemInStorage('favouritePlacesList', newList);
      console.log('Removed from favourites:', id);
    },
    [favouritesList],
  );

  const isInFavourites = useCallback(
    (id: string) => {
      return favouritesList.some((item) => item.id === id);
    },
    [favouritesList],
  );

  const resetGameData = useCallback(async () => {
    setFavouritesList([]);
    await setItemInStorage('favouritePlacesList', []);
  }, []);

  const contextValue = useMemo(
    () => ({
      contextBackground: MAIN_BG_IMAGE,
      isContextOnboardingCompleted: onboardingDone,
      setIsContextOnboardingCompleted,
      contextFavourites: favouritesList,
      addContextFavourites,
      removeFromContextFavourites,
      isInFavourites,
      resetGameData,
    }),
    [
      onboardingDone,
      setIsContextOnboardingCompleted,
      favouritesList,
      addContextFavourites,
      removeFromContextFavourites,
      isInFavourites,
      resetGameData,
    ],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
