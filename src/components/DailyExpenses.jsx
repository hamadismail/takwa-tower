import React from "react";

const DailyExpenses = ({ rec }) => {
  const formatAmount = (amount) => {
    return amount.toLocaleString("en-IN");
  };

  return (
    <tr>
      <td className="font-medium text-sm">{rec?.date}</td>
      <td>{rec?.item}</td>
      <td className="max-md:hidden">{rec?.unit}</td>
      <td className="max-md:hidden">{rec?.unit_cost}</td>
      <td>{rec.total_cost && formatAmount(rec?.total_cost)}</td>
    </tr>
  );
};

export default DailyExpenses;
