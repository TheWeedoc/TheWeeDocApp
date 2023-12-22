import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loader = ({ text,description }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div style={{display:"flex",flexDirection:"column"}}> 
        <Spin indicator={antIcon} style={{fontSize:"25px"}}/>
        {text && (
          <p style={{ marginTop: "10px", fontSize: "20px", color: "#fff" }}>
            {text}
          </p>
        )}
        {description && <small style={{ marginTop: "10px", fontSize: "12px", color: "#fff" }} >{description}</small>}
      </div>
    </div>
  );
};
export default Loader;
