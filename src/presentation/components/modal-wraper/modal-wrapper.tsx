import { createPortal } from "react-dom";

type ModalProps = {
  show: boolean,
  onCloseButtonClick: () => void,
  content: JSX.Element
}

const ModalWrapper = ({ show, onCloseButtonClick, content }: ModalProps) => {
  if (!show) {
    return null;
  }

  return createPortal(
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal__body">{content}</div>
        <div className="modal__footer">
          <button onClick={ onCloseButtonClick }>Close</button>
        </div>
      </div>
    </div>
    , document.body);
};

export default ModalWrapper;