import React from 'react'
import "./Myprofile.css"
import { EditprofileIcon } from '../../Assests/Svg/Commonsvg'
function Myprofile() {
  return (
    <div className='myprofile_page'>
      <div className='myprofile_header_div'>
           <div className='d-flex align-items-center g-2'>
                 <div>
                 <img src="https://media.licdn.com/dms/image/C5603AQGIYT25qdyUmQ/profile-displayphoto-shrink_800_800/0/1637938260330?e=2147483647&v=beta&t=bga--I_pyA8FUDbHvJb92QCuuhiPJnYViXPt4Kmp2Zk" 
                  alt='profile' className='myprofile_img'/>
                 </div>
                 <div>
                      <div className='d-flex align-items-center g-1 my-1'>
                        <h1 className='profile_name'>Nirmal kumar</h1> 
                        <div>{EditprofileIcon}</div>
                      </div>
                      <span>Director</span>
                 </div>
           </div>
           <div className='d-flex align-items-center'>
                 <div></div>
                 <div></div>
           </div>
      </div>
    </div>
  )
}

export default Myprofile