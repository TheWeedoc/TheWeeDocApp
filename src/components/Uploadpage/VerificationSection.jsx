import React, { useState } from "react";
import "./Uploadstyle.css";
import { Addvideoicon } from "../../Assests/Svg/Commonsvg";
import { Modal } from "antd";
import UploadShortFlim from "./Uploadshortfilm/UploadShortFlim";
import AdsUploadShortFlim from "../AdsUpload/Uploadshortfilm/AdsUploadShortFlim";
import Verifyseccard from "../cards/Uploadpage/VerifysecCard";
import { useSelector } from "react-redux";
function VerificationSection() {
  const [filmopen, setflimOpen] = useState(false);
  const [adsopen, setadsOpen] = useState(false);
  const { verification } = useSelector((state) => state.uploads);

  return (
    <div className="mx-2 md:px-0 ">
      <div className="uploadDiv">
        <div className="uploadBox" onClick={() => setflimOpen(true)}>
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

      <h3 className="verifiedHeadin pt-16">Uploaded Films for Verification</h3>

      {/* <div className="verifiy-CardsSection p-2"> */}
      {verification?.results.length > 0 ? (
        <div className="flex justify-start py-9">
          <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-8 custom-lg:gap-x-8 lg:gap-y-8 grid-rows-auto">
            {verification?.results?.map((item, i) => {
              return (
                <Verifyseccard
                  item={item}
                  key={i}
                  lastUpdate={item.created_at}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex text-center py-6 text-white">
          No short flims are in verification Pneding
        </div>
      )}

      {/* <h3 className="verifiedHeadin pt-2">
        Uploaded Advertisement for Verification
      </h3>

      
      <div className="flex justify-start py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
          {cardarr?.map((item, i) => {
            
            return <Verifyseccard item={item} key={i} />;
          })}
        </div>
      </div> */}

      <Modal
        title="Upload a short film"
        centered
        open={filmopen}
        onCancel={() => setflimOpen(false)}
        width={window.innerWidth < 768 ? "100%" : "70%"}
        footer={null}
      >
        <UploadShortFlim />
      </Modal>

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
  );
}

export default VerificationSection;
