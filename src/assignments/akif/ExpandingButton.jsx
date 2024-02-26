import React, { useState } from "react";

export default function ExpandingButton() {
  const [w, setW] = useState(100);
  const [h, setH] = useState(100);

  const expand = () => {
    setW(w + 100);
    setH(h + 100);
  };

  return (
    <>
      <button style={{ width: w, height: h }} onClick={expand}>
        Expand
      </button>
    </>
  );
}
