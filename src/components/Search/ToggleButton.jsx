import React, { useState } from "react";
import { Button } from "antd";

const ToggleButton = () => {
  const [selected, setSelected] = useState("films");

  const handleToggle = (option) => {
    setSelected(option);
  };

  return (
    <div className="flex items-center w-4/5 font-notosans border border-[#4a4949] rounded-md">
      <Button
        className={`w-full  rounded-r-md border-none  ${
          selected === "films" ? "bg-[#21222d] text-white " : "text-[#c5c5c5]"
        }`}
        onClick={() => handleToggle("films")}
      >
        Films
      </Button>
      <Button
        className={`w-full rounded-l-md  border-none hover:text-white ${
          selected === "user"
            ? "bg-[#21222d] text-white focus:outline-none "
            : "text-[#c5c5c5]"
        }`}
        onClick={() => handleToggle("user")}
      >
        UserId
      </Button>
    </div>
  );
};

export default ToggleButton;
