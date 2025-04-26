import React from 'react';
import ExpensesContainer from '../components/ExpensesContainer';
import { useLoaderData } from 'react-router';
import RecentExpenses from '../components/RecentExpenses';

const Expenses = () => {
  const expenses = useLoaderData();
  return (
    <div className="w-11/12 mx-auto my-8">
      <h1 className="text-center text-xl font-semibold">Takwa Tower</h1>
      <p className="text-center text-sm font-medium">
        All Expenses Since January 2024
      </p>

      <ExpensesContainer expenses={expenses} />
      <RecentExpenses expenses={expenses} />
    </div>
  );
};

export default Expenses;
