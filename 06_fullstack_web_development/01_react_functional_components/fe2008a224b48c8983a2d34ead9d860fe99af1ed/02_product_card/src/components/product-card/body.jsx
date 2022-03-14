import React from "react";

const CardBody = (zelda) => {
  let [showScreen, setShowScreen] = React.useState(true);
  const displayInfo = (
    <div>
      <img src={zelda.cover.url} alt="" />
      <p>{zelda.firstReleaseDate}</p>
      {zelda.genres.map(({ name }) => {
        return <p key={name}>{name}</p>;
      })}
      <p>{zelda.summary}</p>
    </div>
  );
  if (showScreen) {
    return (
      <div>
        <div>
          {displayInfo}
          <button onClick={() => setShowScreen((showScreen = false))}>Hide Screenshot</button>
        </div>
        {zelda.screenshots.map(({ url }) => {
          return <img key={url} className="img-thumbnail" src={url} />;
        })}
      </div>
    );
  } else {
    return (
      <div>
        {displayInfo}
        <button onClick={() => setShowScreen((showScreen = true))}>Show screenshot</button>
      </div>
    );
  }
};

export default CardBody;
