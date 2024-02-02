import React from "react";

const Shadow = ({ firstColor, secondColor }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 199 251"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 66.6513V0H199V67.1954C199 95.4621 183.307 121.392 158.265 134.503C133.897 147.262 118.627 172.495 118.627 200.001V251H81.5832V200.531C81.5832 172.727 66.0581 147.25 41.3477 134.503C15.9542 121.405 0 95.2239 0 66.6513Z"
        fill="url(#paint0_linear_301_8)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_301_8"
          x1="99.5"
          y1="0"
          x2="99.5"
          y2="251"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={firstColor} />
          <stop offset="1" stopColor={secondColor} stopOpacity="0.36" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Shadow;
