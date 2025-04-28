import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import DailyInvests from '../components/DailyInvests';

const Investment = () => {
  const invests = useLoaderData();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [investment, setInvestment] = useState([]);
  const totalInvest = invests.reduce(
    (acc, invest) => (acc += invest.amount),
    0
  );

  useEffect(() => {
    if (invests.length > 20) {
      if (showAll) {
        setInvestment(invests);
      } else {
        setInvestment(invests.slice(0, 20));
      }
    } else {
      setInvestment(invests);
    }
  }, [showAll, invests]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-white p-4 mb-4 rounded-2xl flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-medium">All Invests</h1>
          <h2 className=" font-medium">Since January 2025</h2>
        </div>
        <div className="w-1/2 flex justify-end">
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
              <th>Sources</th>
              <th>Amounts</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {investment.map(invest => (
              <DailyInvests key={invest.id} invest={invest} />
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td>
                {invests.length > 20 && (
                  <button
                    className="btn bg-blue-600 text-white rounded-full"
                    onClick={() => {
                      setShowAll(prev => !prev);
                      showAll &&
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {showAll ? 'Show Less' : 'Show All'}
                  </button>
                )}
              </td>
            </tr>
            <tr className="font-semibold text-lg bg-gray-200">
              <td>Total Invests:</td>
              <td></td>
              <td>{totalInvest}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Investment;
