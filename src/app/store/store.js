// store.js
import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      login: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage', // Имя ключа для сохранения в локальном хранилище
      getStorage: () => localStorage, // Используем localStorage для сохранения данных
    }
  )
);

export default useAuthStore;