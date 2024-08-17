import React from 'react';
import "./Notification.css";
import { UpdateNotification } from '../../Api/Fetchclient';

function Notification({ notify }) {
  return (
    <div className='noti_tabs_div'>
      {/* <label className='activeTab'>Notifications</label> */}
      <div className='notifi-card'>
        {notify && notify.length > 0 ? (
          notify.map((item, index) => (
            <div key={index} className="notification-item">
              <p style={{color:"steelblue"}}>{item.content}</p>
              <small style={{fontSize:"12px"}}>{new Date(item.timestamp).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <div>No Activity</div>
        )}
      </div>
    </div>
  );
}

export default Notification;
