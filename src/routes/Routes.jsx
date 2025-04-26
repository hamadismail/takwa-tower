import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Error from '../pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home, loader: () => fetch('/house.json') },
    ],
  },
]);

export default router;
