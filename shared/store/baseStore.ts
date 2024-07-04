import { create } from 'zustand';

interface BaseState {
  tg: null | TelegramWebApp;
  userId: null | number;
  setTg: (tg: any) => void;
  removeTg: () => void;
  removeUserId: () => void;
}

interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  sendData: (data: string) => void;
}

const useBaseStore = create<BaseState>((set) => ({
  tg: null,
  userId: null,
  setTg: (tg: any) =>
    set(() => ({
      tg: tg,
      userId: tg?.initDataUnsafe?.user?.id,
    })),

  removeTg: () => set({ tg: null }),
  removeUserId: () => set({ userId: null }),
}));

export default useBaseStore;
