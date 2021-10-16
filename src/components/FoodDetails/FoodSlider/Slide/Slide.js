import React from "react";

const Slide = ({ food }) => {
  const { img } = food;
  return (
    <div>
      <img style={{ width: "200px" }} src={img} alt="" />
    </div>
  );
};

export default Slide;
