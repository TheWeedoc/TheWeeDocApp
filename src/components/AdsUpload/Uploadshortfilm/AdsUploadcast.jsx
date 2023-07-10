import React,{useState,useEffect} from 'react'
import "./AdsuploadShortFilm.css"
import { AddUploadBtn } from '../../../Assests/Svg/Commonsvg';
function AdsUploadcast() {
 const [count,setCount] = useState()

 const total = count * 5

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

    <div className='price_amount'>
      <div className='count_priceDiv'>
          <div>
            <input type='number' className='pricecount_input' onChange={e=>setCount(e.target.value)} value={count}/>
            <span>Viewer</span>
          </div>
          <div>
            <b>Estimated amount : ₹ {total}.00</b>
          </div>
      </div>
      <input style={{width:"100%",marginTop:"20px"}} value={count} onChange={e=>setCount(e.target.value)} min="50" max="1000" type="range" name="" id="" />
    </div>
   
    </div>
  )
}

export default AdsUploadcast