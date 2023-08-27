import React, { useEffect } from "react";
import "./Uploadpage.css";
import Header from "../../components/Layout/Header/Header";
import { Tabs } from "antd";
import VerificationSection from "../../components/Uploadpage/VerificationSection";
import RejectedSection from "../../components/Uploadpage/RejectedSection";
import ApprovedSection from "../../components/Uploadpage/ApprovedSection";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadsApproved,
  uploadsRejected,
  uploadsVerification,
} from "../../store/Home/uploadsReducer";
function Uploadpage() {
  const dispatch = useDispatch();
  const onChange = (key) => {
    console.log(key);
  };

  // Approved

  useEffect(() => {
    dispatch(uploadsApproved());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pending
  useEffect(() => {
    dispatch(uploadsVerification());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rejected
  useEffect(() => {
    dispatch(uploadsRejected());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = [
    {
      id: "1",
      key: "1",
      label: `Verification`,
      children: <VerificationSection />,
    },
    {
      id: "2",
      key: "2",
      label: `Rejected`,
      children: <RejectedSection />,
    },
    {
      id: "3",

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
