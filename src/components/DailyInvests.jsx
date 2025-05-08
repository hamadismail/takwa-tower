import React from "react";

const DailyInvests = ({ invest }) => {
  const formatAmount = (amount) => {
    return amount.toLocaleString("en-IN");
  };
  return (
    <tr>
      <td className="font-medium text-sm">{invest.date}</td>
      <td>{invest.sources}</td>
      <td>{formatAmount(invest.amount)}</td>
    </tr>
  );
};

export default DailyInvests;
