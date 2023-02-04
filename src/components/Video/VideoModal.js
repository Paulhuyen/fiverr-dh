import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

export default function VideoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="modal-btn" variant="none" onClick={handleShow}>
        <img className="modal-img" src="./img/selling.png" alt="..."></img>
      </Button>

      <Modal className="modal-show modal-lg" show={show} onHide={handleClose}>
        <div className="video-selling">
          <ReactPlayer
            url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
            width="100%"
            height="auto"
            playing={true}
            controls={false}
          />
        </div>
      </Modal>
    </>
  );
}
