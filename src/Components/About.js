import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, []);
  return (
    <div>
      <h2>About</h2>
      This is About {a.state.name} & he is class {a.state.class}
    </div>
  );
}
export default About;
