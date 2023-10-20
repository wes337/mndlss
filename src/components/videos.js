import { useState, useEffect } from "react";
import { VIDEOS } from "../data/work";
import { CDN_URL } from "../constants";
import WatchButton from "./watch-button";
import "../styles/videos.scss";

function Videos() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const selectedVideo = VIDEOS[selectedVideoIndex];

  useEffect(() => {
    return () => {
      document
        .querySelectorAll("animated")
        .forEach((element) => element.remove());
    };
  }, []);

  const onSelectVideo = (index) => {
    setSelectedVideoIndex(index);
    const videoButton = document.getElementById(`video-${index}`);
    videoButton.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  };

  const onPointerEnter = (index) => {
    const videoButton = document.getElementById(`video-${index}`);

    const previewVideo = document.createElement("video");

    previewVideo.id = `preview-video-${index}`;
    previewVideo.classList.add("animated");
    previewVideo.src = `${CDN_URL}/gifs/${VIDEOS[index].image}.mp4`;
    previewVideo.volume = 0;
    previewVideo.muted = true;
    previewVideo.loop = true;
    previewVideo.playsInline = true;
    previewVideo.play().catch(() => {
      // Do nothing
    });

    videoButton.appendChild(previewVideo);
  };

  const onPointerLeave = (index) => {
    const previewVideo = document.getElementById(`preview-video-${index}`);
    previewVideo?.remove();
  };

  return (
    <div className="videos">
      <div className="selected-video">
        <div className="video-preview">
          <img
            className="vignette"
            src={`${CDN_URL}/images/misc/vignette.png`}
            alt=""
          />
          <video
            key={selectedVideo.image}
            className="animated"
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              src={`${CDN_URL}/gifs/${selectedVideo.image}.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="video-info">
          <div className="name">{selectedVideo.name}</div>
          <div className="description">{selectedVideo.description}</div>
          <div className="watch">
            <WatchButton url={selectedVideo.url} />
          </div>
        </div>
      </div>
      <div className="video-scroller">
        {VIDEOS.map((video, index) => {
          return (
            <button
              id={`video-${index}`}
              className="video"
              key={video.name}
              onClick={() => onSelectVideo(index)}
              onPointerEnter={() => onPointerEnter(index)}
              onPointerLeave={() => onPointerLeave(index)}
            >
              <img
                className="vignette"
                src={`${CDN_URL}/images/misc/vignette.png`}
                alt=""
              />
              <img
                className="still"
                src={`${CDN_URL}/gifs/stills/${video.image}.png`}
                alt=""
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Videos;
