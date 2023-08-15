import React from "react";
import { Select } from "antd";
import {
  StarOutlined,
  HeartOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { sortvector } from "../../../Assests/Svg/Commonsvg";

const { Option } = Select;

const Test = () => {
  const options = [
    { value: "newtoold", label: "Newest to Oldest", icon: { sortvector } },
    { value: "oldtonew", label: "Oldest to Newest", icon: { sortvector } },
  ];

  const renderOption = (option) => (
    <div>
      {option.icon} {option.label}
    </div>
  );

  return (
    <Select
      defaultValue="1"
      style={{ width: 200 }}
      optionLabelProp="label"
      className="bg-black"
    >
      {options.map((option) => (
        <Option
          key={option.value}
          value={option.value}
          label={renderOption(option)}
          className="bg-black"
        >
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default Test;
