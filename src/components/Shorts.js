import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import ShortItem from "./ShortItem";

function Shorts() {
  const { dummyShorts } = useContext(AppContext);
  return (
    <div className="shorts-area">
      <div className="shorts-logo">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon"
        >
          <g
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="style-scope yt-icon"
          >
            <g className="style-scope yt-icon">
              <path
                d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
                fill="red"
                className="style-scope yt-icon"
              ></path>
              <polygon
                points="10 14.65 15 12 10 9.35 10 14.65"
                fill="#fff"
                className="style-scope yt-icon"
              ></polygon>
            </g>
          </g>
        </svg>
        <span className="light-text">Shorts</span>
      </div>

      <div className="short-boxes">
        {dummyShorts.map((short) => (
          <ShortItem key={short.id} short={short} />
        ))}
      </div>
    </div>
  );
}

export default Shorts;
