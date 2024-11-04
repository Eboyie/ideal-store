import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FilterProvider } from './components/FilterContext';

createRoot(document.getElementById('root')!).render(
  <FilterProvider>
    <App />
  </FilterProvider>
);
