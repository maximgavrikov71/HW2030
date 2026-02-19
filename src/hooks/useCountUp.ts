import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  decimals = 0,
  suffix = '',
  prefix = '',
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const endTime = startTime + duration;

      const tick = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Easing function (ease-out-cubic)
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = start + (end - start) * easeOutCubic;
        
        setCount(Number(currentValue.toFixed(decimals)));

        if (now < endTime) {
          requestAnimationFrame(tick);
        } else {
          setCount(end);
          setIsComplete(true);
        }
      };

      requestAnimationFrame(tick);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, end, duration, delay, decimals]);

  const formattedValue = `${prefix}${count.toLocaleString('ru-RU')}${suffix}`;

  return { value: count, formattedValue, isComplete };
}
