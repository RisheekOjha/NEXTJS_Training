"use client"
import { useEffect, useState } from "react";

function UpgradeCount() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("trust me it worked");

    const interval_id = setInterval(() => {
      setCount((count_value: number) => count_value + 1);
    }, 1000);

    return () => {
      clearInterval(interval_id);
      console.log("Cleanup done");
    };
  }, []);
  return <div>Timer Count : {count}</div>;
}

export default UpgradeCount;
