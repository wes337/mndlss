import { CDN_URL } from "../constants";
import "../styles/about.scss";

export default function About() {
  return (
    <div className="about">
      <video className="about-photo" autoPlay loop muted playsInline>
        <source src={`${CDN_URL}/videos/me.mp4`} type="video/mp4" />
      </video>
      <div className="about-info">
        <p>
          <span>MNDLSS</span> is the alias of guerilla filmmaker{" "}
          <em>Alex Luke</em>, a multi-faceted digital creative residing in the
          tri-state.
        </p>
        <p className="about-quote">
          “I have been trusted by global brands to deliver content services that
          embody out of the box thinking & practices. I do this all while
          pursuing independent media projects in comedy, film, & music. My works
          continually challenge creative molds that push my limits & abilities
          as an artist.”
        </p>
        <p>Available for hire: director, editor, camera op + assistant.</p>
      </div>
    </div>
  );
}
