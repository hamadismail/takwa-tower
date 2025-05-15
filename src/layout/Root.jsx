import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Spinner from "../components/ui/Spinner";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { use } from "react";
import { CostContext } from "../providers/CostContext";

const investsRes = fetch("/invests.json").then((res) => res.json());

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const expenses = useLoaderData();
  const { setCosts } = use(CostContext);
  const { setInvests } = use(CostContext);

  const investsData = use(investsRes);

  const totalInvest = investsData.reduce(
    (acc, invest) => (acc += invest.amount),
    0,
  );

  useEffect(() => {
    const total = expenses.reduce((acc, expense) => {
      const monthTotal = expense.costs.reduce(
        (sum, item) => sum + item.total_cost,
        0,
      );
      return acc + monthTotal;
    }, 0);

    setCosts(total);
    setInvests(totalInvest);
  }, [expenses, setCosts, setInvests, totalInvest]);

  return (
    <>
      <Navbar />
      {isNavigating ? (
        <Spinner />
      ) : (
        <div className="min-h-[calc(100vh-421px)]">
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Root;
