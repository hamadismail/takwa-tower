import React from "react";
import DailyExpenses from "./DailyExpenses";

const RecentExpenses = ({ expenses }) => {
  const recentExpences = expenses[0].costs;
  const totalCost = recentExpences.reduce((acc, exp) => {
    return (acc += exp.total_cost);
  }, 0);

  const formatAmount = (amount) => {
    return amount.toLocaleString("en-IN");
  };

  return (
    <div className="mt-8 bg-white py-4 lg:p-8 rounded-xl">
      <h1 className="text-lg font-medium mb-4 pl-4">Recent Expenses</h1>

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
            {recentExpences.map((rec) => (
              <DailyExpenses key={rec.id} rec={rec} />
            ))}
          </tbody>

          <tfoot>
            <tr className="font-semibold text-lg bg-gray-200">
              <td>Total Costs:</td>
              <td className="max-md:hidden"></td>
              <td className="max-md:hidden"></td>
              <td className="max-md:hidden"></td>
              <td>{formatAmount(totalCost)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RecentExpenses;
