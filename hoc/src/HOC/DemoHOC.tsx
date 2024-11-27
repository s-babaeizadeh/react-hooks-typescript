import React from "react";
import HOC, { SampleObjectProps } from "./HOC";

interface DemoHOCProps {
  value: SampleObjectProps;
}
const DemoHOC: React.FC<DemoHOCProps> = ({ value }) => {
  return (
    <div>
      <h1 className="font-bold">Hello from App</h1>
      <h2 className="font-semibold text-green-500">This is {value.name}</h2>
      <h3 className="font-medium text-red-600 ">I work as a {value.role}</h3>
      <h4>I work for {value.company}</h4>
    </div>
  );
};

export default HOC(DemoHOC);
