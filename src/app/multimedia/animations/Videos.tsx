import React from "react";

const Videos = ({ video }: { video: string }) => (
    <video className="max-h-[250px] mx-[5px] mb-[10px] max-w-full " src={video} controls muted />
  );

export default Videos;
