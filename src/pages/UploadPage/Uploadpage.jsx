import React from "react";
import "./Uploadpage.css";
import Header from "../../components/Layout/Header/Header";
import { Tabs } from "antd";
import VerificationSection from "../../components/Uploadpage/VerificationSection";
import RejectedSection from "../../components/Uploadpage/RejectedSection";
import ApprovedSection from "../../components/Uploadpage/ApprovedSection";
function Uploadpage() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Verification`,
      children: <VerificationSection />,
    },
    {
      key: "2",
      label: `Rejected`,
      children: <RejectedSection />,
    },
    {
      key: "3",
      label: `Approved`,
      children: <ApprovedSection />,
    },
  ];

  return (
    <>
      <Header />
      <div className="uploadMainDiv  ">
        <h2>Uploads & status</h2>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
      </div>
    </>
  );
}

export default Uploadpage;
