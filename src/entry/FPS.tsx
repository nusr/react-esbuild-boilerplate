import React, { memo } from 'react';
import styles from './index.module.css';
import { useFPS } from './useFps';

export const FPS: React.FunctionComponent = memo(() => {
  const [fps] = useFPS();
  return (
    <div data-testid="menubar-fps" className={styles.fps}>
      FPS: {fps}
    </div>
  );
});

FPS.displayName = 'FPS';
