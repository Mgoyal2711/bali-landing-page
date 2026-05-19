import { useEffect } from 'react';

export function useCountdown() {
  useEffect(() => {
    let totalSeconds = 24 * 60 * 60;

    const update = () => {
      const timers = document.querySelectorAll('.countdown-timer');
      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
      const seconds = String(totalSeconds % 60).padStart(2, '0');
      const text = `${hours}:${minutes}:${seconds}`;
      timers.forEach((t) => {
        t.textContent = text;
      });
      totalSeconds = totalSeconds <= 0 ? 24 * 60 * 60 : totalSeconds - 1;
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
}
