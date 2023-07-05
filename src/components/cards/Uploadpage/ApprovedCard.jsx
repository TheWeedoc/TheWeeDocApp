import React from 'react'
import { Link } from 'react-router-dom'
import "./uploadsection.css"

function ApprovedCard({item}) {
    return (
        <div className='verifycardDiv'>
        <Link to={`/video/${1}/${item.title}`}>
         <img className="verifycardimg"  src={item?.img} alt={item.title} />
       </Link>
         <div className=' d-flex align-items-center justify-content-between my-2'>
         <div>
           <span className='verifycrdTitle'>{item.title}</span>
         </div>
         <div className='thumbsDiv'>
             <button className='Appro_uploadbtn'>Upload</button>
         </div>
         </div>
         <span className='crdbtmsec-text'>Action | Tamil | U/A 14+</span>
     </div>
      )
}

export default ApprovedCard