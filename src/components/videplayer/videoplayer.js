import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import _ from "videojs-contrib-quality-levels";
import "video.js/dist/video-js.css";
import "./videoplayer.css";
import "videojs-hotkeys";
import { PlayCircleFilled } from "@ant-design/icons";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import useIsClient from "../hooks/useIsClient";
import { AddViewsCount } from "../../Api/Fetchclient";
import { useParams } from "react-router";

// import { playiconloader } from "../../asset/svg/CommonIcons";
function Videoplayer({
  videoUrl,
  onVideoEnd,
  thumbnail,
  isTrailer,
  isLoading,
  countdown,
  videoreset,
  playnxtless,
  showModal,
}) {
  // console.log(showModal,"VIDEO PLAYER MODAL STATUS")
  const videoRef = useRef();
  const { id } = useParams();
  const [player, setPlayer] = useState(undefined);

  const [halfwayReached, setHalfwayReached] = useState(false);
  const hasHalfwayReached = useRef(false);
  const videoId = "e2280eeb-4cdb-43e7-a34f-36868326b8cb";
  const liveURL = videoUrl;
  // "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4";
  // videoFile
  // "https://vz-b4f1e97e-483.b-cdn.net/65c65840-de66-4c27-afd0-a3b5a904b768/playlist.m3u8"
  // "https://fingrad-test.s3.ap-south-1.amazonaws.com/test-video/video-file/fingradintradaytradingcourse-traileredited.m3u8"
  // "https://fingrad-test.s3.ap-south-1.amazonaws.com/test-video/chapter2/video.m3u8"

  // useEffect(() => {
  //   if (player) {
  //     player.src({
  //       src: liveURL,
  //       type: liveURL?.includes("m3u8") ? "application/x-mpegURL" : "video/mp4",
  //       withCredentials: false,
  //     });
  //     player.poster("");
  //     setCallFinishVideoAPI(false);
  //     setVidDuration(50000);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [videoId, liveURL, thumbnailURL]);

  // useEffect(() => {
  //   if (callFinishVideoAPI) {
  //     //finishesVideo()
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [callFinishVideoAPI]);

  // useEffect(() => {
  //   const videoJsOptions = {
  //     autoplay: true,
  //     isFullscreen: true,
  //     playbackRates: [0.5, 1, 1.5, 2],
  //     preload: "auto",
  //     controls: true,
  //     poster: thumbnail,
  //     sources: [
  //       {
  //         src: liveURL,
  //         type: liveURL?.includes("m3u8")
  //           ? "application/x-mpegURL"
  //           : "video/mp4",
  //         withCredentials: false,
  //       },
  //     ],
  //     html5: {
  //       nativeAudioTracks: true,
  //       nativeVideoTracks: true,
  //       nativeTextTracks: true,
  //     },
  //     plugins: {
  //       hotkeys: {
  //         volumeStep: 0.1,
  //         seekStep: 10,
  //       },
  //     },
  //   };

  //   const p = videojs(
  //     videoRef.current,
  //     videoJsOptions,
  //     function onPlayerReady() {
  //       // console.log('onPlayerReady');
  //     }
  //   );

  //   setPlayer(p);
  //   console.log(videoJsOptions, "VIDEO SETTING");

  //   return () => {
  //     if (player) player?.dispose();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // let skipBehindButtonDom;
  // let skipAheadButtonDom;
  // useEffect(() => {
  //   if (player) {
  //     var skipBehindButton = player.controlBar.addChild("button", {}, 2);
  //     skipBehindButtonDom = skipBehindButton.el();
  //     skipBehindButtonDom.innerHTML =
  //       '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7137_26153)"><path d="M11.9902 5V1L6.99023 6L11.9902 11V7C15.3002 7 17.9902 9.69 17.9902 13C17.9902 16.31 15.3002 19 11.9902 19C8.68023 19 5.99023 16.31 5.99023 13H3.99023C3.99023 17.42 7.57023 21 11.9902 21C16.4102 21 19.9902 17.42 19.9902 13C19.9902 8.58 16.4102 5 11.9902 5ZM10.8902 16H10.0402V12.74L9.03023 13.05V12.36L10.8002 11.73H10.8902V16ZM15.1702 14.24C15.1702 14.56 15.1402 14.84 15.0702 15.06C15.0002 15.28 14.9002 15.48 14.7802 15.63C14.6602 15.78 14.5002 15.89 14.3302 15.96C14.1602 16.03 13.9602 16.06 13.7402 16.06C13.5202 16.06 13.3302 16.03 13.1502 15.96C12.9702 15.89 12.8202 15.78 12.6902 15.63C12.5602 15.48 12.4602 15.29 12.3902 15.06C12.3202 14.83 12.2802 14.56 12.2802 14.24V13.5C12.2802 13.18 12.3102 12.9 12.3802 12.68C12.4502 12.46 12.5502 12.26 12.6702 12.11C12.7902 11.96 12.9502 11.85 13.1202 11.78C13.2902 11.71 13.4902 11.68 13.7102 11.68C13.9302 11.68 14.1202 11.71 14.3002 11.78C14.4802 11.85 14.6302 11.96 14.7602 12.11C14.8902 12.26 14.9902 12.45 15.0602 12.68C15.1302 12.91 15.1702 13.18 15.1702 13.5V14.24ZM14.3202 13.38C14.3202 13.19 14.3102 13.03 14.2802 12.9C14.2502 12.77 14.2102 12.67 14.1602 12.59C14.1102 12.51 14.0502 12.45 13.9702 12.42C13.8902 12.39 13.8102 12.37 13.7202 12.37C13.6302 12.37 13.5402 12.39 13.4702 12.42C13.4002 12.45 13.3302 12.51 13.2802 12.59C13.2302 12.67 13.1902 12.77 13.1602 12.9C13.1302 13.03 13.1202 13.19 13.1202 13.38V14.35C13.1202 14.54 13.1302 14.7 13.1602 14.83C13.1902 14.96 13.2302 15.07 13.2802 15.15C13.3302 15.23 13.3902 15.29 13.4702 15.32C13.5502 15.35 13.6302 15.37 13.7202 15.37C13.8102 15.37 13.9002 15.35 13.9702 15.32C14.0402 15.29 14.1102 15.23 14.1602 15.15C14.2102 15.07 14.2502 14.96 14.2702 14.83C14.2902 14.7 14.3102 14.54 14.3102 14.35V13.38H14.3202Z" fill="white"/></g><defs><clipPath id="clip0_7137_26153"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>';
  //     skipBehindButton.addClass("buttonClass");

  //     var skipAheadButton = player.controlBar.addChild("button", {}, 3);
  //     skipAheadButtonDom = skipAheadButton.el();
  //     skipAheadButtonDom.innerHTML =
  //       '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7137_26133)"><path d="M18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7V11L17 6L12 1V5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13H18Z" fill="white"/><path d="M10.8991 15.9966V11.7266H10.8091L9.03906 12.3566V13.0466L10.0491 12.7366V15.9966H10.8991Z" fill="white"/><path d="M14.3208 11.7797C14.1408 11.7097 13.9508 11.6797 13.7308 11.6797C13.5108 11.6797 13.3208 11.7097 13.1408 11.7797C12.9608 11.8497 12.8108 11.9597 12.6908 12.1097C12.5708 12.2597 12.4608 12.4497 12.4008 12.6797C12.3408 12.9097 12.3008 13.1797 12.3008 13.4997V14.2397C12.3008 14.5597 12.3408 14.8397 12.4108 15.0597C12.4808 15.2797 12.5808 15.4797 12.7108 15.6297C12.8408 15.7797 12.9908 15.8897 13.1708 15.9597C13.3508 16.0297 13.5408 16.0597 13.7608 16.0597C13.9808 16.0597 14.1708 16.0297 14.3508 15.9597C14.5308 15.8897 14.6808 15.7797 14.8008 15.6297C14.9208 15.4797 15.0208 15.2897 15.0908 15.0597C15.1608 14.8297 15.1908 14.5597 15.1908 14.2397V13.4997C15.1908 13.1797 15.1508 12.8997 15.0808 12.6797C15.0108 12.4597 14.9108 12.2597 14.7808 12.1097C14.6508 11.9597 14.4908 11.8497 14.3208 11.7797ZM14.3308 14.3497C14.3308 14.5397 14.3208 14.6997 14.2908 14.8297C14.2608 14.9597 14.2308 15.0697 14.1808 15.1497C14.1308 15.2297 14.0708 15.2897 13.9908 15.3197C13.9108 15.3497 13.8308 15.3697 13.7408 15.3697C13.6508 15.3697 13.5608 15.3497 13.4908 15.3197C13.4208 15.2897 13.3508 15.2297 13.3008 15.1497C13.2508 15.0697 13.2108 14.9597 13.1808 14.8297C13.1508 14.6997 13.1408 14.5397 13.1408 14.3497V13.3797C13.1408 13.1897 13.1508 13.0297 13.1808 12.8997C13.2108 12.7697 13.2408 12.6697 13.3008 12.5897C13.3608 12.5097 13.4108 12.4497 13.4908 12.4197C13.5708 12.3897 13.6508 12.3697 13.7408 12.3697C13.8308 12.3697 13.9208 12.3897 13.9908 12.4197C14.0608 12.4497 14.1308 12.5097 14.1808 12.5897C14.2308 12.6697 14.2708 12.7697 14.3008 12.8997C14.3308 13.0297 14.3408 13.1897 14.3408 13.3797V14.3497H14.3308Z" fill="white"/></g><defs><clipPath id="clip0_7137_26133"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>';
  //     skipAheadButton.addClass("buttonClass");

  //     skipBehindButtonDom.onclick = function () {
  //       skipS3MV(-10);
  //     };

  //     skipAheadButtonDom.onclick = function () {
  //       skipS3MV(10);
  //     };
  //   }
  // }, [player]);

  // function skipS3MV(skipBy) {
  //   player.currentTime(player.currentTime() + skipBy);
  // }

  // useEffect(() => {
  //   if (player) {
  //     player?.qualityLevels();
  //     //   player?.hlsQualitySelector({ displayCurrentQuality: true });
  //   }
  // }, [player]);
  const isClient = useIsClient();

  useEffect(() => {
    if (isClient && videoRef.current) {
      const plyr = new Plyr(videoRef.current, {
        autoplay: true,
        controls: [
          "play-large", // The large play button in the center
          "restart", // Restart playback
          "rewind", // Rewind by the seek time (default 10 seconds)
          "play", // Play/pause playback
          "fast-forward", // Fast forward by the seek time (default 10 seconds)
          "progress", // The progress bar and scrubber for playback and buffering
          "current-time", // The current time of playback
          "duration", // The full duration of the media
          "mute", // Toggle mute
          "volume", // Volume control
          "captions", // Toggle captions
          // Settings menu
          "pip", // Picture-in-picture (currently Safari only)
          "airplay", // Airplay (currently Safari only)
          // Show a download button with a link to either the current source or a custom URL you specify in your options
          "fullscreen", // Toggle fullscreen
        ],
      });

      setPlayer(plyr);

      plyr.on("ended", onVideoEnd);
      plyr.on("timeupdate", () => {
        const currentTime = plyr.currentTime;
        const duration = plyr.duration;

        // Check if video is halfway completed
        if (duration > 0 && currentTime >= duration / 2 && !hasHalfwayReached.current) {
          hasHalfwayReached.current = true; // Set the flag to true to prevent further calls
          AddViewsCount(id) // Call your API here
            .then(response => {
              console.log("Views count updated:", response);
            })
            .catch(error => {
              console.error("Error updating views count:", error);
            });
        }
      });

      return () => {
        if (plyr) {
          plyr.destroy();
        }
      };
    }
  }, [isClient, videoRef, videoUrl, onVideoEnd,id]);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div style={{ position: "relative" }}>
      {/* <div data-vjs-player style={{ width: "100%", height: "100%" }}>
        <video
          style={{ width: "100%", height: "600px", position: "relative" }}
          ref={videoRef}
          // onEnded={onVideoEnd}
          onLoadedMetadata={(e, px) => {
            setVidDuration(e.target.duration);
          }}
          className="vidPlayer video-js vjs-default-skin vjs-big-play-centered"
        ></video>
      </div> */}
      <video
        ref={videoRef}
        className="plyr-react plyr"
        poster={thumbnail}
        style={{ width: "100%", position: "relative" }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}

export default Videoplayer;
