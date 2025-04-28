import React from 'react';

const DailyInvests = ({ invest }) => {
  return (
    <tr>
      <td className="font-medium text-sm">{invest.date}</td>
      <td>{invest.sources}</td>
      <td>{invest.amount}</td>
    </tr>
  );
};

export default DailyInvests;
