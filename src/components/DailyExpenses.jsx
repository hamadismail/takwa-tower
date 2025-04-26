import React from 'react';

const DailyExpenses = ({ rec }) => {
  return (
    <tr>
      <th>{rec.date}</th>
      <td>{rec.item}</td>
      <td className="max-md:hidden">{rec?.unit}</td>
      <td className="max-md:hidden">{rec?.unit_cost}</td>
      <td>{rec.total_cost}</td>
    </tr>
  );
};

export default DailyExpenses;
