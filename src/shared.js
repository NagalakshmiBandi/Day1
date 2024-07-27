import React from 'react';
import './shared.css';

const SharedConnections = ({ image, count }) => {
  return (
    <div className="shared-connections">
      <img src={image} alt="Shared connections" />
      <span>{count} shared connections</span>
    </div>
  );
};

export default SharedConnections;