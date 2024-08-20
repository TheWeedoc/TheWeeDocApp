import React from "react";
import "./Notification.css";
import { UpdateNotification } from "../../Api/Fetchclient";

function Notification({ notify }) {
  const handleNotificationClick = async (item) => {
    try {
      await UpdateNotification({ id: item.id, is_read: true });
    } catch (err) {
      console.error("Failed to update notification:", err);
    }
  };

  return (
    <div className="noti_tabs_div">
      <div className="notifi-card">
        {notify && notify.length > 0 ? (
          notify.map((item, index) => (
            <div
              key={index}
              className="notification-item"
              onClick={() => handleNotificationClick(item)}
            >
              <div style={{display:"flex",alignItems:"center", gap:"10px"}}>
                <div
                  style={{
                    backgroundColor: item.is_read ? "gray" : "green",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                  }}
                ></div>
                <p style={{ color: item.is_read ? "gray" : "steelblue" }}>
                  {item.content}
                </p>
                <small>{item.is_read ? "[ seen ]" : "[ Unseen ]"}</small>
              </div>
              <small style={{ fontSize: "12px" }}>
                {new Date(item.timestamp).toLocaleString()}
              </small>
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
