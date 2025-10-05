import React from "react";
import Footer from "./Footer";
function card({ username = "jayyyyyyyyyy", post = "No post assigned" }) {
  // default value assigned in destructured format
  //console.log(props);
  return (
    <div>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://images.pexels.com/photos/34097915/pexels-photo-34097915.jpeg"
          />
        </div>
        {/* make these stack vertically */}
        <div className="flex flex-col items-center space-y-1">
          <span className="block">Name : {username}</span>
          <span className="block">Job : {post}</span>
        </div>
      </div>
      <Footer bgClass="bg-amber-400" name={username} />
    </div>
  );
}

export default card;
