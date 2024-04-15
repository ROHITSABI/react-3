import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
function About() {
  const a = useContext(noteContext);
  return (
    <div>
      <h2>About</h2>
      This is About {a.name} & he is class {a.class}
    </div>
  );
}
export default About;
