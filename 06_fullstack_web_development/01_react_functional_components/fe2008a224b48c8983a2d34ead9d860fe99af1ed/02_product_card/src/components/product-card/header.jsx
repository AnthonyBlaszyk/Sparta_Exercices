import React from "react";

const CardHeader = (zelda) => {
  return (
    <div>
      {zelda.platformLogos.map(({ platform_logo }) => {
        return <img key={platform_logo.url} src={platform_logo.url} />;
      })}
      <p>{zelda.name}</p>
    </div>
  );
};

export default CardHeader;
