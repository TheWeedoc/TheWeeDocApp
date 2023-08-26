import React, { useState } from "react";
import "./Uploadpage.css";
import Header from "../../components/Layout/Header/Header";
import { Modal, Tabs } from "antd";
import VerificationSection from "../../components/Uploadpage/VerificationSection";
import RejectedSection from "../../components/Uploadpage/RejectedSection";
import ApprovedSection from "../../components/Uploadpage/ApprovedSection";
import AdsUploadShortFlim from "../../components/AdsUpload/Uploadshortfilm/AdsUploadShortFlim";
import { Addvideoicon } from "../../Assests/Svg/Commonsvg";
function Uploadpageads() {
  const [adsopen, setadsOpen] = useState(false);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <Header />
      <div className="uploadMainDiv  ">
        <h2>Uploads & status</h2>

        <div className="py-10">
          <div className="uploadDiv">
            <div className="uploadBox" onClick={() => setadsOpen(true)}>
              <div className="uploadboxText">
                <div>{Addvideoicon}</div>
                <span>
                  Upload & Verify the <b>Short Film</b>
                </span>
              </div>
            </div>
            {/* <div className='uploadBox' onClick={()=>setadsOpen(true)}>
                  <div className='uploadboxText' >
                     <div>{Addvideoicon}</div>
                     <span>Upload & Verify your <b>Advertisment</b></span>
                  </div>
           </div> */}
          </div>
        </div>
        <Modal
          title="Upload a Advertisement"
          centered
          open={adsopen}
          onCancel={() => setadsOpen(false)}
          width={window.innerWidth < 768 ? "100%" : "70%"}
          footer={null}
        >
          <AdsUploadShortFlim />
        </Modal>
      </div>
    </>
  );
}

export default Uploadpageads;
