import React from 'react';
import { useNavigate } from 'react-router';

const ExpenseCard = ({ expense }) => {
  const monthlyCost = expense.costs.reduce((acc, exp) => {
    return (acc += exp.total_cost);
  }, 0);
  const navigate = useNavigate();
  return (
    <div className="card bg-white">
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {expense.month} - {expense.year}
        </h2>
        <p className="bg-gray-100 p-6 w-full text-2xl font-semibold">
          {monthlyCost} BDT
        </p>
        <p>Total Costs</p>

        <button
          onClick={() => {
            navigate(`/monthly-expenses/${expense.id}`);
            window.scrollTo(0, 0);
          }}
          className="btn bg-blue-600 text-white w-full"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;
