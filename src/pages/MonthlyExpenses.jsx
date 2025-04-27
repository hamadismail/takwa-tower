import React from 'react';
import DailyExpenses from '../components/DailyExpenses';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const MonthlyExpenses = () => {
  const expenses = useLoaderData();
  const { monthId } = useParams();
  const monthData = expenses.find(exp => exp.id === parseInt(monthId));
  const monthlyCost = monthData.costs.reduce((acc, exp) => {
    return (acc += exp.total_cost);
  }, 0);

  const navigate = useNavigate();

  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-white p-4 mb-4 rounded-2xl flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-medium">Monthly Expenses</h1>
          <h2 className=" font-medium">
            {monthData.month} - {monthData.year}
          </h2>
        </div>
        <div>
          <button
            onClick={() => navigate(-1)}
            className="btn bg-blue-600 text-white rounded-full"
          >
            Go Back
          </button>
        </div>
      </div>

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

          <tfoot>
            <tr className="font-semibold text-lg bg-gray-200">
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
