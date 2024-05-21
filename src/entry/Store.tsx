import React, { useSyncExternalStore } from 'react';
import { objectStore, arrayStore } from '@/store';

export const Store = () => {
  const objectStoreState = useSyncExternalStore(
    objectStore.subscribe,
    objectStore.getSnapshot,
  );
  const arrayStoreState = useSyncExternalStore(
    arrayStore.subscribe,
    arrayStore.getSnapshot,
  );
  return (
    <div>
      <div>objectStoreState: {JSON.stringify(objectStoreState)}</div>
      <div>
        <div>arrayStoreState:</div>
        {arrayStoreState.map((v) => (
          <div key={v.label}>{v.label}</div>
        ))}
      </div>
    </div>
  );
};
