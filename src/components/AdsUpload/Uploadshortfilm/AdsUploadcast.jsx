import React, { useState, useEffect } from "react";
import "./AdsuploadShortFilm.css";
import { AddUploadBtn } from "../../../Assests/Svg/Commonsvg";
function AdsUploadcast({ current, onNext, onPrev, formData, setFormData }) {
  const [count, setCount] = useState(50);

  const total = count * 5;

  const handleNext = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      viewersCount: count,
    };
    setFormData(updatedFormData);
  };

  return (
    <div className="upload_popup_inside">
      <b>Please read the information below carefully before proceeding</b>
      <ul className="instr_ads_upload">
        <li>
          The Amount set for <b>per person</b> viewing your advertisement is{" "}
          <b>5 rupees.</b>
        </li>
        <li>The full amount must be paid initially.</li>
        <li>
          You will be able to monitor your advertisement’s performance in your
          profile page under the upload tab.
        </li>
        <li>
          Your advertisement will be played in the platform till it reaches the
          viewers you wanted to reach.
        </li>
      </ul>
      <b>Enter the number of persons you want to view your advertisement </b>

      <div className="price_amount">
        <div className="count_priceDiv">
          <div>
            <input
              type="number"
              className="pricecount_input border-none"
              onChange={(e) => setCount(e.target.value)}
              value={count}
            />
            <span>Viewer</span>
          </div>
          <div>
            <b>Estimated amount : ₹ {total}.00</b>
          </div>
        </div>
        <input
          style={{ width: "100%", marginTop: "20px" }}
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min="50"
          max="1000"
          type="range"
          name=""
          id=""
        />
      </div>

      <div className="uploadpopup_btm">
        {current > 0 && <button onClick={onPrev}>Previous</button>}

        {current === 2 && <button onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
}

export default AdsUploadcast;
