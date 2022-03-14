import React from "react";

export const HideOrNotHide = () => {
  // Code here
  let [showtext, setShowtext] = React.useState(true);

  if (showtext) {
    return (
      <div>
        <button onClick={() => setShowtext((showtext = false))}>Paragraph visible</button>
        <p>Some Text</p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setShowtext((showtext = true))}>Paragraph hidden</button>
      </div>
    );
  }
};
