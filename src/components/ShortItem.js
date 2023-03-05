import React from "react";

function ShortItem({ short }) {
  return (
    <div className="short-box">
      <img
        src={require("../assets/images/shorts/" + short.id + ".png")}
        alt="short"
      />
      <h3 className="short-title light-text">{short.title}</h3>
      <span className="short-views gray-text"> {short.views} Views </span>
    </div>
  );
}

export default ShortItem;
