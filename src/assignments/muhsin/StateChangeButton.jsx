import React, { useState } from 'react';

function StateChangeButton() {
  const [buttonStyle, setButtonStyle] = useState({
    width: 100,
    height: 100
  });

  const changeButtonStyle = () => {
    setButtonStyle(prevStyle => ({
      width: prevStyle.width + 100,
      height: prevStyle.height + 100
    }));
  };

  return (
    <button style={buttonStyle} onClick={changeButtonStyle}>
      Change Size
    </button>
  );
}

export default StateChangeButton;
