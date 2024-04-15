import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Rohit",
    class: "5f",
  };
  let [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      state = {
        name: "Rahul",
        class: "10f",
      };
      setState(state);
    }, 1500);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
