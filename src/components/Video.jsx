import React from "react";
import videothumbnail from "../assets/images/videoThumbnail.png";
import YoutubeIcon from "../assets/svgIcon/YoutubeIcon";

const Video = () => {
  const handleThumbnailClick = () => {
    window.open("https://www.youtube.com/embed/IZLp-TZyDkQ?si=-7FbPyy97HskkIpp", "_blank");
  };

  return (
    <div
      className="relative w-full max-w-xl h-80 cursor-pointer"
      onClick={handleThumbnailClick}
    >
      <img
        src={videothumbnail} 
        alt="Video Thumbnail"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex justify-center items-center">
      <YoutubeIcon/>
      </div>
    </div>
  );
};

export default Video;
