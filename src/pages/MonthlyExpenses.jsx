import React from 'react';
import DailyExpenses from '../components/DailyExpenses';
import { useLoaderData, useParams } from 'react-router';

const MonthlyExpenses = () => {
  const expenses = useLoaderData();
  const { monthId } = useParams();
  const monthData = expenses.find(exp => exp.id === parseInt(monthId));
  const monthlyCost = monthData.costs.reduce((acc, exp) => {
    return (acc += exp.total_cost);
  }, 0);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-medium text-center"> Monthly Expenses</h1>
      <h2 className="text-center font-medium mb-8">
        {monthData.month} - {monthData.year}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Items</th>
              <th className="max-md:hidden">Units</th>
              <th className="max-md:hidden">Unit Costs</th>
              <th>Total Costs</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {monthData.costs.map(rec => (
              <DailyExpenses key={rec.id} rec={rec} />
            ))}
          </tbody>

          <tfoot className="bg-gray-100 ">
            <tr className="font-semibold text-lg">
              <td>Total Costs:</td>
              <td className="max-md:hidden"></td>
              <td className="max-md:hidden"></td>
              <td></td>
              <td>{monthlyCost}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MonthlyExpenses;
