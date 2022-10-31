import React from "react";
import Select from 'react-select'

const SelectorComp = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return <Select options={options} />;
};

export default SelectorComp;
