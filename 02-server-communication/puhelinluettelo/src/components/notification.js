import React from 'react';

function Notification({msg}) {
  if (msg === null) {
    return null
  }
  return <div className="notification">{msg}</div>
}

export default Notification;
