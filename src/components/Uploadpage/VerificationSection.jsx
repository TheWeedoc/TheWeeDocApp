import React, { useState, useEffect } from "react";
import "./Uploadstyle.css";
import { Addvideoicon } from "../../Assests/Svg/Commonsvg";
import Homepagecard from "../cards/Hompage/Homepagecard";
import { Modal } from "antd";
import UploadShortFlim from "./Uploadshortfilm/UploadShortFlim";
import AdsUploadShortFlim from "../AdsUpload/Uploadshortfilm/AdsUploadShortFlim";
import Verifyseccard from "../cards/Uploadpage/VerifysecCard";
function VerificationSection() {
  const [filmopen, setflimOpen] = useState(false);
  const [adsopen, setadsOpen] = useState(false);

  const cardarr = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Pen",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
    {
      id: "2",

      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Iragu",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Pen",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
    {
      id: "4",

      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Iragu",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
  ];
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

      <h3 className="verifiedHeadin pt-2">Uploaded Films for Verification</h3>

      {/* <div className="verifiy-CardsSection p-2"> */}
      <div className="flex justify-center py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
          {cardarr?.map((item, i) => {
            {
              /* return <Homepagecard item={item} key={i} />; */
            }
            return <Verifyseccard item={item} key={i} />;
          })}
        </div>
      </div>

      <h3 className="verifiedHeadin pt-2">
        Uploaded Advertisement for Verification
      </h3>

      {/* <div className="verifiy-CardsSection p-2"> */}
      <div className="flex justify-center py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
          {cardarr?.map((item, i) => {
            {
              /* return <Homepagecard item={item} key={i} />; */
            }
            return <Verifyseccard item={item} key={i} />;
          })}
        </div>
      </div>

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
