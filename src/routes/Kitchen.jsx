import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../components/Image";

const Kitchen = () => {
  return (
    <>
      <Image />
      <Link to={"/"}>Kitchen</Link>
    </>
  );
};

export default Kitchen;
