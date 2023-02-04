import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

export default function VideoSlickModal4() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="modal-btn" variant="none" onClick={handleShow}>
        <img
          className="modal-img-slick"
          src="./img/testimonial4.png"
          alt="testimonial4"
        ></img>
      </Button>

      <Modal className="modal-show" show={show} onHide={handleClose}>
        <div className="video-selling">
          <ReactPlayer
            url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun"
            width="900px"
            height="auto"
            playing={true}
            controls={false}
          />
        </div>
      </Modal>
    </>
  );
}
