import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { initScrollReveal } from '@/utils/scrollReveal';

window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

const metaThemeColor = document.querySelector('meta[name="theme-color"]');
if (!metaThemeColor) {
  const el = document.createElement('meta');
  el.name = 'theme-color';
  el.content = '#fbf5ef';
  document.head.appendChild(el);
}

function ScrollRevealInit() {
  useEffect(() => {
    const disconnect = initScrollReveal();
    return () => disconnect?.();
  }, []);
  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ScrollRevealInit />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
