import React from "react";

const CardFooter = (props) => {
  const link = "games/" + props.slug;

  return <a href={link}>See more details</a>;
};

export default CardFooter;
