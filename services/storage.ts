import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Service de persistance local — wrapper typé autour d'AsyncStorage.
 * Toutes les données de l'app sont stockées localement (offline-first).
 */

export const StorageKeys = {
  USER_PROFILE: '@darija/user_profile',
  FAVORITE_VERBS: '@darija/favorite_verbs',
  FAVORITE_WORDS: '@darija/favorite_words',
  USER_STATS: '@darija/user_stats',
  WORD_PROGRESS: '@darija/word_progress',
  LESSON_PROGRESS: '@darija/lesson_progress',
  REVIEW_SESSIONS: '@darija/review_sessions',
  REVIEW_CARDS: '@darija/review_cards',
  SETTINGS: '@darija/settings',
  ONBOARDING_DONE: '@darija/onboarding_done',
  LAST_ACTIVE_DATE: '@darija/last_active_date',
} as const;

export type StorageKey = (typeof StorageKeys)[keyof typeof StorageKeys];

class StorageService {
  async get<T>(key: StorageKey): Promise<T | null> {
    try {
      const raw = await AsyncStorage.getItem(key);
      if (raw === null) return null;
      return JSON.parse(raw) as T;
    } catch {
      console.warn(`[Storage] get(${key}) failed`);
      return null;
    }
  }

  async set<T>(key: StorageKey, value: T): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      console.warn(`[Storage] set(${key}) failed`);
      return false;
    }
  }

  async remove(key: StorageKey): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch {
      console.warn(`[Storage] remove(${key}) failed`);
      return false;
    }
  }

  async clearAll(): Promise<boolean> {
    try {
      const keys = Object.values(StorageKeys);
      await AsyncStorage.multiRemove(keys);
      return true;
    } catch {
      console.warn('[Storage] clearAll() failed');
      return false;
    }
  }
}

export const storage = new StorageService();
