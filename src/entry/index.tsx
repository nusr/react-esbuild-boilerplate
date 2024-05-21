import React, { memo } from 'react';
import { Theme } from './Theme';
import { I18N } from './I18N';
import { FPS } from './FPS';
import { Github, Button } from '@/components';
import { $ } from '@/i18n';
import styles from './index.module.css';
import { Store } from './Store';
import { objectStore, arrayStore } from '@/store';

export const App = memo(() => {
  return (
    <div data-testid="menubar">
      <div className={styles['menubar-container']}>
        <I18N />
        <Theme />
        <Button
          onClick={() => {
            objectStore.mergeState({ row: 10 });
          }}
          style={{ marginRight: 10 }}
        >
          update objectStore
        </Button>
        <Button
          style={{ marginRight: 10 }}
          onClick={() => {
            arrayStore.setState([
              { value: 1, label: 'new1', disabled: false },
              { value: 2, label: 'new2', disabled: false },
            ]);
          }}
        >
          update arrayStore
        </Button>
        <FPS />

        <Github />
      </div>
      <div className={styles['menubar-content']}>
        <div>I18N: {$('language')}</div>
        <div>
          <Store />
        </div>
      </div>
    </div>
  );
});

App.displayName = 'App';
