import "./MessageForm.css";
import { useState } from "react";

const MessageForm = ({ title, subtitle, buttonText = "Send message" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    check: false,
  });

  const [alertMessage, setAlertMessage] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleFormName = (e) => {
    const value = e.target.value;
    
    setFormData((prev) => ({ ...prev, name: value }));
    
    if (value.trim() === "") {
      setAlertMessage((prev) => ({ ...prev, name: true }));
    } else {
      setAlertMessage((prev) => ({ ...prev, name: false }));
    }
  };

  const handleFormEmail = (e) => {
    const value = e.target.value;
    
    setFormData((prev) => ({ ...prev, email: value }));
    
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    
    if (!isValid) {
      setAlertMessage((prev) => ({ ...prev, email: true }));
    } else {
      setAlertMessage((prev) => ({ ...prev, email: false }));
    }
  };

  const handleFormMessage = (e) => {
    const value = e.target.value;
    
    setFormData((prev) => ({ ...prev, message: value }));
    
    if (value.trim().length < 20) {
      setAlertMessage((prev) => ({ ...prev, message: true }));
    } else {
      setAlertMessage((prev) => ({ ...prev, message: false }));
    }
  };

  const handleFormCheck = (e) => {
    const checked = e.target.checked;
    setFormData((prev) => ({ ...prev, check: checked }));
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const btnState =
    formData.name.trim() !== "" &&
    formData.message.trim().length >= 20 &&
    isEmailValid;

  const resetData = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      check: false,
    });
    setAlertMessage({
      name: false,
      email: false,
      message: false,
    });
  };

  return (
    <div className="message-form-container">
      <h2 className="message-form-title">{title}</h2>
      <p className="message-form-subtitle mb-4">{subtitle}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          resetData();
        }}
      >
        <div className="row g-3 mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="message-name" className="form-label fw-medium">
              Your Name <span className="text-danger">*</span>
            </label>
            <input
              id="message-name"
              type="text"
              className="form-control message-input"
              placeholder="Your Name*"
              onChange={handleFormName}
              value={formData.name}
            />
            {alertMessage.name && (
              <p className="text-danger">Your name is required.</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="message-email" className="form-label fw-medium">
              Your Email <span className="text-danger">*</span>
            </label>
            <input
              id="message-email"
              type="email"
              className="form-control message-input"
              placeholder="Your Email*"
              onChange={handleFormEmail}
              value={formData.email}
            />
            {alertMessage.email && (
              <p className="text-danger">Please enter a valid email address.</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message-text" className="form-label fw-medium">
            Your Message <span className="text-danger">*</span>
          </label>
          <textarea
            id="message-text"
            className="form-control message-textarea"
            rows="5"
            placeholder="Your Message*"
            onChange={handleFormMessage}
            value={formData.message}
          ></textarea>
          {alertMessage.message && (
            <p className="text-danger">
              Message must be at least 20 characters.
            </p>
          )}
        </div>

        <div className="form-check mb-4 message-form-checkbox">
          <input
            className="form-check-input rounded-0"
            type="checkbox"
            id="message-saveInfo"
            onChange={handleFormCheck}
            checked={formData.check}
          />

          <label
            className="form-check-label text-muted label-font-size"
            htmlFor="message-saveInfo"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <button
          type="submit"
          disabled={!btnState}
          className="message-submit-button"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default MessageForm;