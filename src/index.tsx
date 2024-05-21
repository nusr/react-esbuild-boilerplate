import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './entry';
import './global.css';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
