import React from 'react'
import "./Uploadstyle.css"
import { Addvideoicon } from '../../Assests/Svg/Commonsvg'
import Homepagecard from '../cards/Hompage/Homepagecard'
function VerificationSection() {

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
           <div className='uploadBox'>
                  <div className='uploadboxText'>
                     <div>{Addvideoicon}</div>
                     <span>Upload & Verify the <b>Short Film</b></span>
                  </div>
           </div>
           <div className='uploadBox'>
                  <div className='uploadboxText' >
                     <div>{Addvideoicon}</div>
                     <span>Upload & Verify your <b>Advertisment</b></span>
                  </div>
           </div>
       </div>

       <h3 className='verifiedHeadin'>Uploaded Films for Verification</h3>

       <div className='home-CardsSection'>
        {cardarr?.map((item,id)=>{
          return(
            <Homepagecard item={item}/>
          )
        })
        }
  </div>

    </>
  )
}

export default VerificationSection