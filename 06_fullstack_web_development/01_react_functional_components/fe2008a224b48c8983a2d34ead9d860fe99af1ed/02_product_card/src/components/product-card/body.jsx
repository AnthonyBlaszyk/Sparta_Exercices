import React from "react";

const CardBody = (game) => {
  const [showScreen, setShowScreen] = React.useState(false);
  return (
    <div>
      {/* cover */}
      {game.cover.url ? <img src={game.cover.url} alt="Game's cover" /> : <img src={game.cover} alt="Game's cover" />}

      {/* release date */}
      <p>{game.firstReleaseDate}</p>

      {/* genres */}
      <div>
        {game.genres.map((genre, index) => {
          return genre.name ? <p key={index}>{genre.name}</p> : <p key={index}>{genre}</p>;
        })}
      </div>

      {/* summary */}
      <p>{game.summary}</p>

      {/* show screenshot */}
      <button onClick={() => setShowScreen(!showScreen)}>Show | hide Screenshot</button>
      <div>
        {showScreen
          ? game.screenshots.map((url, index) => {
              return <img key={index} className="img-thumbnail" src={url} />;
            })
          : null}
      </div>
    </div>
  );
};

export default CardBody;
