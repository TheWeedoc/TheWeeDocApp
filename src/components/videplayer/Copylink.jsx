import React, { useState } from "react";
import { CopyButton, greenTick } from "../../Assests/Svg/Commonsvg";

function Copylink() {
  const [copy, setCopy] = useState(false);
  const copyToClipboard = (e) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopy(true);
      })
      .catch(() => {
        setCopy(false);
      });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="flex flex-row space-x-4 text-white items-center py-2 px-4 rounded border border-[#545455] rounded-md"
    >
      Copy Film Link
      <span className="flex items-center pl-3">
        {copy ? greenTick : CopyButton}
      </span>
    </button>
  );
}

export default Copylink;
