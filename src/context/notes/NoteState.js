import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "Rohit",
    class: "5f",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
