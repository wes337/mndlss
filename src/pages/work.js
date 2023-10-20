import Videos from "../components/videos";
import { CDN_URL } from "../constants";
import "../styles/work.scss";

function Work() {
  return (
    <div className="work">
      <Videos />
      <video className="work-backdrop" loop muted playsInline autoPlay>
        <source src={`${CDN_URL}/videos/old-video-comp.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}

export default Work;
