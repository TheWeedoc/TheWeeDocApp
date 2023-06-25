import React,{useState,useEffect} from 'react'
import "./Notification.css";

function Notification() {
    const [active,setActive]=useState("one")
  return (
    <div>
        <div className='noti_tabs_div'>
             <div className={active==="one"?'activeTab':""}
              onClick={()=>setActive("one")}
             >Notifications</div>
             <div className={active==="two"?'activeTab':""}
              onClick={()=>setActive("two")}
             >Upload status</div>
        </div>
        {active==="one"&&<div>
                Notification 
        </div>}

        {active==="two"&&<div>
            Upload status
        </div>}
    </div>
  )
}

export default Notification