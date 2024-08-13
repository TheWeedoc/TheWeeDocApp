import React from 'react';
import "./Notification.css";

function Notification({ notify }) {
  return (
    <div className='noti_tabs_div'>
      <label className='activeTab'>Notifications</label>
      <div>
        {notify && notify.length > 0 ? (
          notify.map((item, index) => (
            <div key={index} className="notification-item">
              <p>{item.content}</p>
              <small>{new Date(item.timestamp).toLocaleString()}</small>
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
