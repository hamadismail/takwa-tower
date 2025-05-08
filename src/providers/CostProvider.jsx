import { useState } from "react";
import { CostContext } from "./CostContext";

const CostProvider = ({ children }) => {
  const [costs, setCosts] = useState(0);

  const costsData = {
    costs,
    setCosts,
  };
  return <CostContext value={costsData}>{children}</CostContext>;
};

export default CostProvider;
