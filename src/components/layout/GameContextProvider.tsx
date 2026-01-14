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
  const [favouritesSet, setFavouritesSet] = useState<Set<string>>(new Set());

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
          setFavouritesSet(new Set(savedFavourites.map((item) => item.id)));
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
      setFavouritesList((prev) => {
        const isAlreadyInFavourites = prev.some((fav) => fav.id === item.id);
        if (isAlreadyInFavourites) {
          if (__DEV__) console.log('Item already in favourites:', item.id);
          return prev;
        }

        const newList = [...prev, item];
        setFavouritesSet(new Set([...favouritesSet, item.id]));
        setItemInStorage('favouritePlacesList', newList);
        if (__DEV__) console.log('Added to favourites:', item.title);
        return newList;
      });
    },
    [favouritesSet],
  );

  const removeFromContextFavourites = useCallback(
    async (id: string) => {
      setFavouritesList((prev) => {
        const newList = prev.filter((p) => p.id !== id);
        const newSet = new Set(favouritesSet);
        newSet.delete(id);
        setFavouritesSet(newSet);
        setItemInStorage('favouritePlacesList', newList);
        if (__DEV__) console.log('Removed from favourites:', id);
        return newList;
      });
    },
    [favouritesSet],
  );

  const isInFavourites = useCallback(
    (id: string) => {
      return favouritesSet.has(id);
    },
    [favouritesSet],
  );

  const resetGameData = useCallback(async () => {
    setFavouritesList([]);
    setFavouritesSet(new Set());
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
