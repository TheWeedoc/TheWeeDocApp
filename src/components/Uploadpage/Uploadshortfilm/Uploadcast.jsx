import React, { useState } from "react";
import "./uploadShortFilm.css";
import { AddUploadBtn } from "../../../Assests/Svg/Commonsvg";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { AddProduct } from "../../../Api/Fetchclient";

function Uploadcast({ current, onNext, onPrev, formData, setFormData }) {
  const [load, setLoad] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 20,
        color: "black",
      }}
      spin
    />
  );

  const handleAdd = () => {
    const newData = [...data, { userId, role }];
    setData(newData);
    setUserId("");
    setRole("");
  };
  // API CALL

  const result = async (data) => {
    try {
      const response = await AddProduct(data);
      console.log("Login response", response);
      setLoad(false);
      if (response?.status === 200 || response?.status === 201) {
        console.log("Response Add Prods", response);
      }
      if (response?.status === 404) {
        const errorData = response.data;
        setErrMessage(errorData);
        console.log(errorData);
      }
      if (response?.status === 401) {
        setErrMessage(response.data);
      }
    } catch (error) {
      if (error && error.data) {
        const errorData = error.data;
        setErrMessage(errorData);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    // Update the form data in the parent component
    const updatedFormData = {
      ...formData,
      cast: data,
    };
    setFormData(updatedFormData);

    const formDataUpload = new FormData();

    for (const key in updatedFormData) {
      if (updatedFormData.hasOwnProperty(key)) {
        if (Array.isArray(updatedFormData[key])) {
          updatedFormData[key].forEach((item, index) => {
            for (const prop in item) {
              if (item.hasOwnProperty(prop)) {
                formDataUpload.append(`${key}[${index}].${prop}`, item[prop]);
              }
            }
          });
        } else if (typeof updatedFormData[key] === "object") {
          for (const prop in updatedFormData[key]) {
            if (updatedFormData[key].hasOwnProperty(prop)) {
              formDataUpload.append(
                `${key}.${prop}`,
                updatedFormData[key][prop]
              );
            }
          }
        } else {
          formDataUpload.append(key, updatedFormData[key]);
        }
      }
    }

    // Call API here using the updatedFormData
    result(formDataUpload);
  };

  return (
    <div className="upload_popup_inside">
      <b>Cast & Crew</b>

      <div className="rolecastDiv">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
        />
      </div>
      <button className="castAddBtn" onClick={handleAdd}>
        {AddUploadBtn} Add
      </button>

      <ol type="1" className="upld_rolecast_list py-4 space-y-4">
        {data.map((item, index) => (
          <li key={index}>
            User ID: {item.userId}, Role: {item.role}
          </li>
        ))}
      </ol>
      <div className="uploadpopup_btm">
        {current > 0 && <button onClick={onPrev}>Previous</button>}

        <button onClick={handleSubmit} className="loginbtn">
          {load ? <Spin indicator={antIcon} /> : "Upload Video"}
        </button>
      </div>
      {errMessage && (
        <div className="text-center">
          <span className="text-[#770000] font-semibold text-lg font-notosans">
            {errMessage.detail}
          </span>
        </div>
      )}
    </div>
  );
}

export default Uploadcast;
