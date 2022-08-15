import { useCallback, useEffect, useState } from 'react';

export const useTopLevel = () => {
  const [topLevel, setTopLevel] = useState({ level: 1 });

  const saveLevel = localStorage.getItem('R&M');

  useEffect(() => {
    if (saveLevel) setTopLevel(JSON.parse(saveLevel));
  }, []);

  const changeTopLevel = useCallback((level: number) => {
    if (level > topLevel.level) {
      localStorage.setItem('R&M', JSON.stringify({ level }));
      setTopLevel({ level });
    }
  }, [topLevel]);

  return { topLevel, changeTopLevel };
};
