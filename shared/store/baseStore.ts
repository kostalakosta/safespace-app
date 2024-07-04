import { create } from 'zustand';

interface BaseState {
  tg: null | TelegramWebApp;
  userId: null | number;
  setTg: (tg: any) => void;
  removeTg: () => void;
  removeUserId: () => void;
}

export interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  sendData: (data: string) => void;
  headerColor: string;
}

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
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
