import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./SettingContent.css";

export default function SettingContent() {
  const userData={
    name:"Amr",
    lastName:"Ahmed",
    phone:"0123456789",
    email:"amr@example.com"
  }
  const [formData, setFormData] = useState({
    firstName: userData.name,
    lastName: userData.lastName,
    phone: userData.phone,
    email: userData.email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [alertMessage, setAlertMessage] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [eyes, setEyes] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // Recheck the confirmation field when either password changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "confirmPassword") {
      setAlertMessage((prev) => ({
        ...prev,
        confirmPassword: value.trim() === "" || value !== formData.newPassword,
      }));
      return;
    }

    if (name === "newPassword") {
      setAlertMessage((prev) => ({
        ...prev,
        newPassword: value.trim() === "" || value.trim().length < 8,
        confirmPassword:
          formData.confirmPassword.trim() !== "" &&
          value !== formData.confirmPassword,
      }));
      return;
    }

    setAlertMessage((prev) => ({ ...prev, [name]: value.trim() === "" }));
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, email: value }));
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setAlertMessage((prev) => ({ ...prev, email: !isValid }));
  };

  const toggleEye = (field) => {
    setEyes((prev) => {
      return {
        ...prev,
        [field]: !prev[field],
      };
    });
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const passwordsMatch = formData.newPassword === formData.confirmPassword;
  const isNewSameAsCurrent =
    formData.currentPassword !== "" &&
    formData.newPassword !== "" &&
    formData.currentPassword === formData.newPassword;

  const btnState =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.currentPassword.trim() !== "" &&
    formData.newPassword.trim() !== "" &&
    formData.newPassword.trim().length >= 8 &&
    formData.confirmPassword.trim() !== "" &&
    passwordsMatch &&
    isEmailValid &&
    !isNewSameAsCurrent;

  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem("formData"));

    if (dataStorage) {
      setFormData(dataStorage);
    }
  }, []);

  return (
    <section className="account-settings mb-5 w-100">
      <h2 className="account-section-title mb-4 fw-bold">Setting</h2>

      <div className="settings-form-card p-4 p-md-5">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            localStorage.setItem("formData", JSON.stringify(formData));
            setFormData((prev) => ({
              ...prev,
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }));
          }}
        >
          <h6 className="settings-section-heading">Information</h6>
          <Row className="mb-3 align-items-center">
            <Col xs={3} className="text-center">
              <div className="settings-avatar d-flex align-items-center justify-content-center fw-4 fs-1">
                Hi
              </div>
            </Col>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label className="fw-semibold mb-2">
                  Upload File
                </Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label className="fw-semibold mb-2">
                  First Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="mb-2"
                />
                {alertMessage.firstName && (
                  <p className="text-danger mb-0">First name is required.</p>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label className="fw-semibold mb-2">
                  Last Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="mb-2"
                />
                {alertMessage.lastName && (
                  <p className="text-danger mb-0">Last name is required.</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label className="fw-semibold mb-2">
                  Phone Number <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="mb-2"
                />
                {alertMessage.phone && (
                  <p className="text-danger mb-0">Phone number is required.</p>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label className="fw-semibold mb-2">
                  Email Address <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleEmail}
                  placeholder="Email Address"
                  className="mb-2"
                />
                {alertMessage.email && (
                  <p className="text-danger mb-0">
                    Please enter a valid email address.
                  </p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <h6 className="settings-section-heading mt-4">Change Password</h6>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold mb-2">
              Current Password <span className="text-danger">*</span>
            </Form.Label>
            <div className="password-input-wrapper mb-2">
              <Form.Control
                type={eyes.currentPassword ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Current password"
                className="mb-2"
              />
              <i
                className={`password-eye-icon fa-solid fa-${
                  eyes.currentPassword ? "eye" : "eye-slash"
                }`}
                onClick={() => toggleEye("currentPassword")}
              ></i>
            </div>

            {alertMessage.currentPassword && (
              <p className="text-danger mb-0">Current password is required.</p>
            )}
            {isNewSameAsCurrent && (
              <p className="text-danger mb-0">
                Old and new passwords cannot be the same
              </p>
            )}

            <Form.Label className="fw-semibold mb-2">
              New Password <span className="text-danger">*</span>
            </Form.Label>
            <div className="password-input-wrapper mb-2">
              <Form.Control
                type={eyes.newPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New password"
                className="mb-2"
              />
              <i
                className={`password-eye-icon fa-solid fa-${
                  eyes.newPassword ? "eye" : "eye-slash"
                }`}
                onClick={() => toggleEye("newPassword")}
              ></i>
            </div>
            {alertMessage.newPassword && (
              <p className="text-danger mb-0">
                New password is required and must be at least 8 characters.
              </p>
            )}

            <Form.Label className="fw-semibold mb-2">
              Confirm New Password <span className="text-danger">*</span>
            </Form.Label>
            <div className="password-input-wrapper mb-2">
              <Form.Control
                type={eyes.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                className="mb-2"
              />
              <i
                className={`password-eye-icon fa-solid fa-${
                  eyes.confirmPassword ? "eye" : "eye-slash"
                }`}
                onClick={() => toggleEye("confirmPassword")}
              ></i>
            </div>
            {alertMessage.confirmPassword && (
              <p className="text-danger mb-0 mt-3">
                {formData.confirmPassword.trim() === ""
                  ? "Confirm password is required."
                  : "Passwords do not match."}
              </p>
            )}
          </Form.Group>

          <Button
            type="submit"
            className="settings-submit-btn btn btn-dark"
            disabled={!btnState}
          >
            Save Changes
          </Button>
        </Form>
      </div>
    </section>
  );
}
