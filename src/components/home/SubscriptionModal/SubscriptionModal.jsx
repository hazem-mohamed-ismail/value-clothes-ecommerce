import "./SubscriptionModal.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const SubscriptionModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      dialogClassName="modal-dialog-centered"
      contentClassName="modal-container-custom"
    >
      <Modal.Body className="p-0">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-stretch flex-column flex-md-row">
            <div className="col-12 col-md-6 modal-image-side">
              <img
                src="/assets/home/home-modal.jpg"
                alt="Promotion"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            <div className="col-12 col-md-6 position-relative d-flex flex-column justify-content-center p-4 text-center text-md-start modal-content-side">
              <button
                type="button"
                className="btn-close-custom position-absolute d-flex align-items-center justify-content-center"
                aria-label="Close"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  width="18"
                  height="18"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h3 className="modal-subtitle mb-1">Subscribe & Enjoy</h3>
              <h2 className="modal-title-discount mb-3">10% OFF</h2>
              <p className="modal-description mb-4 mx-auto mx-md-0">
                Join our email list & be first to Receive 10% OFF your next order,
                exclusive offers & more!
              </p>

              <div className="position-relative w-100 mb-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-control modal-input-field rounded-pill"
                />
                <button
                  type="button"
                  className="btn btn-dark modal-submit-btn rounded-pill position-absolute"
                >
                  Subscribe
                </button>
              </div>

              <p className="modal-footer-text m-0">
                Don't worry, we hate spam as much as you do
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SubscriptionModal;
