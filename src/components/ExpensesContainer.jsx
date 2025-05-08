import ExpenseCard from "./ExpenseCard";
import { useState } from "react";
import { useEffect } from "react";

const ExpensesContainer = ({ expenses }) => {
  const [showAll, setShowAll] = useState(false);
  const [month, setMonth] = useState([]);

  useEffect(() => {
    if (expenses.length > 4) {
      if (showAll) {
        setMonth(expenses);
      } else {
        setMonth(expenses.slice(0, 4));
      }
    } else {
      setMonth(expenses);
    }
  }, [showAll, expenses]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {month.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {expenses.length > 4 && (
          <button
            className="btn bg-blue-600 text-white rounded-full"
            onClick={() => {
              setShowAll((prev) => !prev);
              showAll && window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpensesContainer;
