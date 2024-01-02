import React,{useState,useEffect} from 'react'
import "./Notification.css";

function Notification({notify}) {
  
  return (
        <div className='noti_tabs_div'>
             <label className='activeTab'>Notifications</label>
             <div>
                No Activity
             </div>
        </div>
  )
}

export default Notification