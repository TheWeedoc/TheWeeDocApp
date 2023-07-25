import React,{useState,useEffect} from 'react'
import "./Uploadstyle.css"
import { Addvideoicon } from '../../Assests/Svg/Commonsvg'
import Homepagecard from '../cards/Hompage/Homepagecard'
import {Modal} from 'antd';
import UploadShortFlim from './Uploadshortfilm/UploadShortFlim';
import AdsUploadShortFlim from '../AdsUpload/Uploadshortfilm/AdsUploadShortFlim';
function VerificationSection() {
 
  const [filmopen, setflimOpen] = useState(false);
  const [adsopen, setadsOpen] = useState(false);

  const cardarr = [
    {
      "img" : "https://i.ytimg.com/vi/YwDZMgIImSg/maxresdefault.jpg",
      "title" : "Pen",
      "like"  : "3.01K",
    },
    {
      "img" : "https://i.ytimg.com/vi/OG0gxFIOqGI/maxresdefault.jpg",
      "title" : "Iragu",
      "like"  : "1.42K",
    },
  ]
  return (
    <>
       <div className='uploadDiv'>
           <div className='uploadBox' onClick={()=>setflimOpen(true)}>
                  <div className='uploadboxText'>
                     <div>{Addvideoicon}</div>
                     <span>Upload & Verify the <b>Short Film</b></span>
                  </div>
           </div>
           {/* <div className='uploadBox' onClick={()=>setadsOpen(true)}>
                  <div className='uploadboxText' >
                     <div>{Addvideoicon}</div>
                     <span>Upload & Verify your <b>Advertisment</b></span>
                  </div>
           </div> */}
       </div>

       <h3 className='verifiedHeadin'>Uploaded Films for Verification</h3>

       <div className='verifiy-CardsSection'>
        {cardarr?.map((item,id)=>{
          return(
            <Homepagecard item={item}  />
          )
        })}
      </div>
      
      <Modal
        title="Upload a short film"
        centered
        open={filmopen}
        onCancel={() => setflimOpen(false)}
        width="70%"
        footer={null}
      >
        <UploadShortFlim/>
      </Modal>

      <Modal
        title="Upload a Advertisement"
        centered
        open={adsopen}
        onCancel={() => setadsOpen(false)}
        width="70%"
        footer={null}
      >
        <AdsUploadShortFlim/>
      </Modal>

    </>
  )
}

export default VerificationSection