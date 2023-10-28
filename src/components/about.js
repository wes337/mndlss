import { CDN_URL } from "../constants";
import "../styles/about.scss";

export default function About() {
  return (
    <div className="about">
      <video className="about-photo" autoPlay loop muted playsInline>
        <source src={`${CDN_URL}/videos/me.mp4`} type="video/mp4" />
      </video>
      <div className="about-info">
        <p className="about-quote">
          <span>MNDLSS</span> is the alias of American filmmaker{" "}
          <em>Alex Luke</em>.
        </p>
        <p>
          My passion lies in creating immersive media through guerilla shooting
          techniques, fusing both traditional and contemporary mediums and
          technologies. I disrupt established media norms, nurturing complete
          artistic liberty in both my personal practice and the projects I
          engage with.
        </p>
        <p>I embody this concept through MNDLSS.</p>
      </div>
    </div>
  );
}
