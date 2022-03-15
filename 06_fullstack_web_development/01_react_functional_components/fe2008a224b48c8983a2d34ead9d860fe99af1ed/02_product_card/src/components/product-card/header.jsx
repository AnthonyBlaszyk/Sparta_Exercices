import React from "react";

const CardHeader = (zelda) => {
  return (
    <div>
      {zelda.platformLogos.map((platform_logo, index) => {
        return <img key={index} src={platform_logo} />;
      })}
      <p>{zelda.name}</p>
    </div>
  );
};

export default CardHeader;
