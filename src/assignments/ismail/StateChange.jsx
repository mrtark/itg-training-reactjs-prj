import React, { useState } from 'react';

function StateChange() {
  const [styleOfButton, setStyleOfButton] = useState({
    width: 100,
    height: 100
  });

  const changeStyleOfButton = () => {
    setStyleOfButton(originalStyle => ({
      width: originalStyle.width + 100,
      height: originalStyle.height + 100
    }));
  };

  return (
    <button style={styleOfButton} onClick={changeStyleOfButton}>
      Change Size
    </button>
  );
}

export default StateChange;