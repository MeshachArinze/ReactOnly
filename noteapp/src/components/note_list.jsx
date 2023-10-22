import PropTypes from "prop-types"

import NoteCard from "./note_card.jsx";
import { useContext } from "react";
import { NotesContext } from "../context";

function NoteList() {
  const { notesData } = useContext(NotesContext);

  function sortByDate(a, b) {
    const dateA = a.createDate;
    const dateB = b.createDate;
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  }

  return (
    <div className="row tab-content bg-transparent note-has-grid">
      {notesData.sort(sortByDate).map((note) => {
        return <NoteCard note={note} key={note.id} />;
      })}
    </div>
  );
}

NoteList.propTypes = {
  notesData: PropTypes.array,
  updateNote: PropTypes.func,
  deleteNote: PropTypes.func
}

export default NoteList;
