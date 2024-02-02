import React from "react";

const Arrow1 = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="17"
      viewBox="0 0 27 17"
      fill="none"
    >
      <path
        d="M26.932 11.6376C27.1322 12.1523 26.8772 12.7318 26.3624 12.932L17.9744 16.194C17.4597 16.3942 16.8801 16.1392 16.68 15.6245C16.4798 15.1097 16.7348 14.5302 17.2495 14.33L24.7055 11.4304L21.806 3.9744C21.6058 3.45967 21.8608 2.88013 22.3755 2.67995C22.8903 2.47978 23.4698 2.73478 23.67 3.24951L26.932 11.6376ZM1.40274 0.084685L26.4027 11.0847L25.5973 12.9153L0.597261 1.91531L1.40274 0.084685Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow1;