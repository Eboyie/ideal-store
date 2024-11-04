import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainContent from './pages/MainContent';
import ProductPage from './pages/ProductPage';

import HomeLayout from './pages/HomeLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import Story from './pages/Story';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,

    children: [
      {
        index: true,
        element: <MainContent />,
      },
      {
        path: 'collection',
        element: <Collection />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'story',
        element: <Story />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
