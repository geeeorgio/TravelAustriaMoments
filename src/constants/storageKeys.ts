export const STORAGE_KEYS = ['isOnboardingCompleted'] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
