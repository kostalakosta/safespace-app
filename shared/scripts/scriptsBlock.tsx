'use client';
import Script from 'next/script';
import { useBaseStore } from '@/shared/store/baseStore';
import { useEffect } from 'react';
export const ScriptsBlock = () => {
  const setTg = useBaseStore((state) => state.setTg);
  console.log(setTg);
  useEffect(() => {
    console.log('useTelegram');
    function initTg() {
      if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
        console.log('Telegram WebApp is set');
        const tgData = window.Telegram.WebApp;
        tgData.ready();
        tgData.expand();
        setTg(tgData);
      } else {
        console.log('Telegram WebApp is undefined, retrying…');
        setTimeout(initTg, 500);
      }
    }
    initTg();
  }, []);
  return (
    <>
      <Script src="https://telegram.org/js/telegram-web-app.js" defer />
    </>
  );
};
