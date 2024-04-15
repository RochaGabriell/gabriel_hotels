import { createBrowserRouter } from 'react-router-dom';
import Base from './layouts/Base';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Blog from './pages/Blog';
import About from './pages/About';
import HotelDetails from './pages/HotelDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/hotel/:id',
        element: <HotelDetails />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/about',
        element: <About />,
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default routes;
