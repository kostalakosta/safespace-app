'use client';
import { useEffect, useState } from 'react';

interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  sendData: (data: string) => void;
}

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
      BackButton: any;
    };
  }
}

const useTelegramWebApp = () => {
  const [telegramWebApp, setTelegramWebApp] = useState<TelegramWebApp | null>(null);

  useEffect(() => {
    const tgScript = document.createElement('script');
    tgScript.src = 'https://telegram.org/js/telegram-web-app.js';
    tgScript.async = true;
    tgScript.onload = () => {
      const tgApp = window.Telegram.WebApp;
      setTelegramWebApp(tgApp);
      tgApp.ready();
      tgApp.expand();
    };
    document.body.appendChild(tgScript);

    return () => {
      document.body.removeChild(tgScript);
    };
  }, []);

  return telegramWebApp;
};

export default useTelegramWebApp;
