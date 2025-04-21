import React from "react";

const Videos = ({ video }: { video: string }) => (
    <video src={video} controls muted />
  );

export default Videos;
