"use client";

import "@videojs/react/video/minimal-skin.css";
import { VideoPlayer, MinimalVideoSkin } from "@videojs/react/video";
import { MuxVideo } from "@videojs/react/media/mux-video";

export const VideoPlayerComponent = ({ src }) => {
  return (
    <VideoPlayer>
      <MinimalVideoSkin>
        <MuxVideo src={src} />
      </MinimalVideoSkin>
    </VideoPlayer>
  );
};
