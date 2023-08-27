import React from "react";
import { CopyButton } from "../../Assests/Svg/Commonsvg";
import { message } from "antd";

function Copylink() {
  const copyToClipboard = (e) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        message.success("Link Copied", 2);
      })
      .catch(() => {
        message.error("Cannot copy the link", 2);
      });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="flex flex-row space-x-4 text-white items-center py-2 px-4 rounded border border-[#545455] rounded-md"
    >
      Copy Film Link
      <span className="flex items-center pl-3">{CopyButton}</span>
    </button>
  );
}

export default Copylink;
