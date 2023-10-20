import { useState } from "react";
import { CDN_URL } from "../constants";
import WatchButton from "./watch-button";
import "../styles/videos.scss";

const PLACEHOLDER_DESCRIPTION = `Nam sed ligula consequat, lacinia mi eget, volutpat turpis. Praesent a elit magna. Morbi nec felis mi. Etiam et orci sed orci ultricies rhoncus. Ut in nibh odio. Proin orci nunc, pharetra at elementum at, laoreet a purus.`;

const VIDEOS = [
  {
    name: "Video Name #1",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "A-E",
  },
  {
    name: "Video Name #2",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "A-EE",
  },
  {
    name: "Video Name #3",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "A-WR",
  },
  {
    name: "Video Name #4",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "A-YAA",
  },
  {
    name: "Video Name #5",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "EE-Wander",
  },
  {
    name: "Video Name #6",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "Joey",
  },
  {
    name: "Video Name #7",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "Julz",
  },
  {
    name: "Video Name #8",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "PM-A",
  },
  {
    name: "Video Name #9",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "PM-IWIDH",
  },
  {
    name: "Video Name #10",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "PM-M",
  },
  {
    name: "Video Name #11",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "RL-BRYG",
  },
  {
    name: "Video Name #12",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "RL-SMM2C",
  },
  {
    name: "Video Name #13",
    description: PLACEHOLDER_DESCRIPTION,
    url: "https://www.youtube.com",
    image: "RL-WIWU",
  },
];

function Videos() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const selectedVideo = VIDEOS[selectedVideoIndex];

  const onSelectVideo = (index) => {
    setSelectedVideoIndex(index);
    const videoElement = document.getElementById(`video-${index}`);
    videoElement.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
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
          <img
            className="gif"
            src={`${CDN_URL}/gifs/${selectedVideo.image}.gif`}
            alt=""
          />
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
              <img
                className="gif"
                src={`${CDN_URL}/gifs/${video.image}.gif`}
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
