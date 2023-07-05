import React from 'react'
import "./homepagecard.css"
import { thumbsdown, thumbsup } from '../../../Assests/Svg/Commonsvg'
import { Link } from 'react-router-dom'
function Homepagecard({item}) {


  return (
    <div className='homepagecardDiv'>
       <Link to={`/video/${1}/${item.title}`}>
        <img className="homepagecardimg"  src={item?.img} alt={item.title} />
      </Link>
        <div className=' d-flex align-items-center justify-content-between my-2'>
        <div>
          <span className='homepgecrdTitle'>{item.title}</span>
        </div>
        <div className='thumbsDiv'>
            <div>{thumbsup}  {item?.like}</div>
            <div>{thumbsdown} 250</div>
        </div>
        </div>
        <span className='crdbtmsec-text'>Action | Tamil | U/A 14+</span>
    </div>
  )
}

export default Homepagecard