import { useAtom } from "jotai";
import { lightModeAtom } from "../state";
import Nav from "./nav";
import "../styles/footer.scss";

export default function Footer() {
  const [lightMode] = useAtom(lightModeAtom);

  return (
    <div className={`footer${lightMode ? " light" : ""}`}>
      <Nav />
      <div className="footer-copyright">© MNDLSS Pictures 2023</div>
    </div>
  );
}
