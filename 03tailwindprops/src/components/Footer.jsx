import React from "react";

function Footer({
  name = "Default Name",
  bgClass = "bg-green-800",
  className = "",
}) {
  // bgClass lets parent override the background color (e.g. "bg-amber-400").
  return (
    <div className={`${bgClass} ${className} font-black`}>
      All rights reserved - {name}
    </div>
  );
}

export default Footer;
