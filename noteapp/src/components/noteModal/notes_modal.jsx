import NotesModalHeader from "./notes_modal_header";
import NotesModalBody from "./notes_modal_body";
import NotesModalFooter from "./notes_modal_footer";

const cssModal = {
  showModal: ".show-modal {display: block; }",
  hideModal: ".hide-modal { display: none;}",
};

function NotesModal() {
  const modalShow = true;
  let cssShowHide =
    modalShow && modalShow === true
      ? `modal ${cssModal.showModal}`
      : `modal ${cssModal.hideModal}`;

  return (
    <>
      {/* <style jsx>
        {`
          .show-modal {
            display: block;
          }
          .hide-modal {
            display: none;
          }
        `}
      </style> */}
      <div role="dialog" className={cssShowHide}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <NotesModalHeader />
            <NotesModalBody />
            <NotesModalFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesModal;
