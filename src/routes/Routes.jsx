import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Error from '../pages/Error';
import HouseDetails from '../pages/HouseDetails';
import Expenses from '../pages/Expenses';
import MonthlyExpenses from '../pages/MonthlyExpenses';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home, loader: () => fetch('/house.json') },
      {
        path: 'expenses',
        Component: Expenses,
        loader: () => fetch('/costs.json'),
      },
      {
        path: 'house-details/:houseId',
        Component: HouseDetails,
        loader: () => fetch('/house.json'),
      },
      {
        path: 'monthly-expenses/:monthId',
        Component: MonthlyExpenses,
        loader: () => fetch('/costs.json'),
      },
    ],
  },
]);

export default router;
