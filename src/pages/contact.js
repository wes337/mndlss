import { useEffect } from "react";
import { useAtom } from "jotai";
import About from "../components/about";
import { lightModeAtom } from "../state";
import "../styles/contact.scss";

function Contact() {
  const [, setLightMode] = useAtom(lightModeAtom);

  useEffect(() => {
    setLightMode(true);

    return () => setLightMode(false);
  });

  return (
    <div className="contact">
      <a href="mailto:mndlsspictures@gmail.com" className="email">
        mndlsspictures@gmail.com
      </a>
      <About />
    </div>
  );
}

export default Contact;
