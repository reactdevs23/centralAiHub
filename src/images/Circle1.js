import React from "react";

const Circle = ({ color, bgColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
    >
      <rect opacity="0.6" width="100" height="100" rx="50" fill={bgColor} />
      <circle cx="38.3636" cy="52.5455" r="12.3636" fill={color} />
      <circle cx="60.5455" cy="63.8182" r="6.18182" fill={color} />
      <circle cx="64.1819" cy="39.8182" r="9.81818" fill={color} />
    </svg>
  );
};

export default Circle;
