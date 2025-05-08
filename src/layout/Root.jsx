import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Spinner from "../components/ui/Spinner";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { use } from "react";
import { CostContext } from "../providers/CostContext";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const expenses = useLoaderData();
  const { setCosts } = use(CostContext);

  useEffect(() => {
    const total = expenses.reduce((acc, expense) => {
      const monthTotal = expense.costs.reduce(
        (sum, item) => sum + item.total_cost,
        0,
      );
      return acc + monthTotal;
    }, 0);

    setCosts(total);
  }, [expenses, setCosts]);

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
