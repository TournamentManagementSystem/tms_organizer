import { Modal } from "react-bootstrap";

export default function DropdownWrapper(props) {
  return (
    <Modal show={props.show} fullscreen onHide={() => props?.onHide?.(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
}
