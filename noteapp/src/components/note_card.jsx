import PropTypes from "prop-types";
import { useContext } from "react";
import { NotesContext } from "../context";

function NoteCard({ note }) {
     const { updateNote, deleteNote } = useContext(NotesContext);

     function editNoteFn(noteId) {
       updateNote(
         noteId,
         undefined,
         `${note.description} : Updated` + new Date()
       );
     }

     function deleteNoteFn(noteId) {
       deleteNote(noteId);
     }

  return (
    <div className="col-md-4 single-note-item all-category">
      <div className="card card-body">
        <div>
          <span className="side-stick"></span>
          <h5 className="note-title text-truncate w-75 mb-0">{note.title}</h5>
        </div>

        <p className="note-date font-12 text-muted">
          {new Date(note.createDate).toLocaleTimeString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>

        <div className="note-content">
          <p className="note-inner-content text-muted">{note.description}</p>
        </div>

        <div className="d-flex align-items-center">
          <span className="mr-2">
            <a href="#" onClick={() => deleteNoteFn(note.id)}>
              <i className="fa fa-trash fa-lg"></i>
            </a>
          </span>
          <span className="mr-2">
            <a href="#" onClick={() => editNoteFn(note.id)}>
              <i className="fa fa-edit fa-lg"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    createDate: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string  }),

    updateNote: PropTypes.func,
    deleteNote: PropTypes.func
};


export default NoteCard;
