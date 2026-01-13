export const STORAGE_KEYS = [
  'isOnboardingCompleted',
  'favouritePlacesList',
] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
