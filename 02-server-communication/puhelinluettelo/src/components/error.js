import React from 'react';

function Error({msg}) {
  if (msg === null) {
    return null
  }
  return <div className="error">{msg}</div>
}

export default Error;
