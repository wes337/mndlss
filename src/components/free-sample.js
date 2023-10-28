import { useState } from "react";
import "../styles/free-sample.scss";

export default function FreeSample() {
  const [input, setInput] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <div className="free-sample">
      <div className="label">
        Sign up and get a <em>FREE SAMPLE</em> asset pack
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          onChange={(event) => setInput(event.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
