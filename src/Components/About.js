import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
function About() {
  const a = useContext(noteContext);

  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
export default About;
