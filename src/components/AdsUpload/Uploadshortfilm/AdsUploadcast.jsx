import React,{useState,useEffect} from 'react'
import "./AdsuploadShortFilm.css"
import { AddUploadBtn } from '../../../Assests/Svg/Commonsvg';
function AdsUploadcast() {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState('');
  const [role, setRole] = useState('');

  const handleAdd = () => {
    const newData = [...data, { userId, role }];
    setData(newData);
    setUserId('');
    setRole('');
  };

  return (
    <div className='upload_popup_inside'>
     <b>Please read the information below carefully before proceeding</b>
    <ul className='instr_ads_upload'>
      <li>The Amount set for <b>per person</b> viewing your advertisement is <b>5 rupees.</b></li>
      <li>The full amount must be paid initially.</li>
      <li>You will be able to monitor your advertisement’s performance in your profile page under the upload tab.</li>
      <li>Your advertisement will be played in the platform till it reaches the viewers you wanted to reach.</li>
    </ul>
    <b>Enter the number of persons you want to view your advertisement </b>

    <div>
      <input style={{width:"100%",marginTop:"20px"}} type="range" name="" id="" />
    </div>
   
    </div>
  )
}

export default AdsUploadcast