import React, { use } from "react";
import { useNavigate } from "react-router";
import { CostContext } from "../providers/CostContext";

const Finance = () => {
  const navigate = useNavigate();
  const { costs, totalInvest } = use(CostContext);
  const formatAmount = (amount) => {
    return amount.toLocaleString("en-IN");
  };

  return (
    <div className="my-8 w-11/12 mx-auto bg-white py-8 rounded-2xl">
      <p className="text-2xl font-semibold text-center">Company Profile</p>

      <div className="flex flex-col md:flex-row mt-4">
        {/* available balance */}
        <div className="flex-[5] bg-gray-100 p-4 m-4 rounded-2xl">
          <h1 className="text-center text-xl font-semibold">
            Available Amount
          </h1>
          <p className="mt-4 text-2xl text-center text-green-600 font-medium p-8 bg-green-100 rounded-2xl">
            {formatAmount(totalInvest - costs + 35465)} BDT
          </p>
          <p className="text-sm mt-1 text-center">Since January 2025</p>

          <p className="text-sm text-center mt-4 bg-gray-200 py-1 px-2 rounded-lg text-orange-700">
            35,465 taka added with last received amount
          </p>
        </div>

        {/* investment card */}
        <div className="flex-[5] bg-gray-100 p-4 m-4 rounded-2xl">
          <h1 className="text-center text-xl font-semibold">
            Total Investment
          </h1>
          <p className="mt-4 text-2xl text-center text-green-600 font-medium p-8 bg-green-100 rounded-2xl">
            {formatAmount(totalInvest)} BDT
          </p>
          <p className="text-sm mt-1 text-center">Since January 2025</p>

          <button
            onClick={() => {
              navigate("/invests");
              window.scrollTo(0, 0);
            }}
            className="mt-4 cursor-pointer bg-green-600 text-white w-full font-semibold p-2 rounded-full"
          >
            View Details
          </button>
        </div>

        {/* expenses card */}
        <div className="flex-[5] bg-gray-100 p-4 m-4 rounded-2xl">
          <h1 className="text-center text-xl font-semibold">Total Expenses</h1>
          <p className="mt-4 text-2xl text-center text-red-600 font-medium p-8 bg-red-100 rounded-2xl">
            {formatAmount(costs)} BDT
          </p>
          <p className="text-sm mt-1 text-center">Since January 2025</p>
          <button
            onClick={() => {
              navigate("/expenses");
              window.scrollTo(0, 0);
            }}
            className="mt-4 cursor-pointer bg-red-600 text-white w-full font-semibold p-2 rounded-full"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finance;
