import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Error from '../pages/Error';
import HouseDetails from '../pages/HouseDetails';
import Expenses from '../pages/Expenses';
import MonthlyExpenses from '../pages/MonthlyExpenses';
import Spinner from '../components/ui/Spinner';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/house.json'),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: 'expenses',
        Component: Expenses,
        loader: () => fetch('/costs.json'),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: 'house-details/:houseId',
        Component: HouseDetails,
        loader: () => fetch('/house.json'),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: 'monthly-expenses/:monthId',
        Component: MonthlyExpenses,
        loader: () => fetch('/costs.json'),
        hydrateFallbackElement: <Spinner />,
      },
    ],
  },
]);

export default router;
