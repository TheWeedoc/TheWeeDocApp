import React, { useState } from "react";
import { Button } from "antd";

const OptionButton = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex space-x-4 font-notosans">
      {options.map((option) => (
        <Button
          key={option}
          type={selectedOption === option ? "default" : "border "}
          className={` py-1 px-3 rounded-lg ${
            selectedOption === option
              ? "border bg-white text-black "
              : "text-white border border-[#515151]"
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default OptionButton;
