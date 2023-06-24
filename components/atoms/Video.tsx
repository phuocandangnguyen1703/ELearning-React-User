import React from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  LoadingSpinner,
  PlayToggle,
  BigPlayButton,
} from "video-react";

type Props = {
  className?: string;
  video: File | string;
  thumbnail?: string;
};

const Video = (props: Props) => {
  const { className, video, thumbnail } = props;
  return (
    <Player
      // width={100}
      // height={100}
      // playsInline
      poster={thumbnail}
      src={
        (typeof video === "string" && video) ||
        (typeof video === "object" && URL.createObjectURL(video)) ||
        undefined
      }
      aspectRatio="16:9"
    >
      {/* <source src={URL.createObjectURL(video)} /> */}
      <LoadingSpinner />
      <ControlBar autoHide={true}  disableCompletely={false} disableDefaultControls={true}>
        <ReplayControl seconds={10} />
        {/* <ForwardControl seconds={30} /> */}
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
        <PlayToggle />
        <BigPlayButton position="center" />
        <VolumeMenuButton />
      </ControlBar>
    </Player>
  );
};

export default Video;
