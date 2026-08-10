import { useState } from "react";
import { Button } from "react-bootstrap";

import "./MyAddressContent.css";

const MyAddressContent = () => {


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });


  const [alertMessage, setAlertMessage] = useState({
    firstName: false,
    lastName: false,
    country: false,
    streetAddress: false,
    townCity: false,
    state: false,
    zip: false,
    phone: false,
    email: false,
  });

    const handleChange = (e) => {
      const {name,value}=e.target
      setFormData((prev)=>{
       return {...prev,[name]:value}
      })
      setAlertMessage((prev)=>{
        return {...prev,[name]:value.trim()===""}
      })
    };

    const handleEmail = (e) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, email: value }));
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setAlertMessage((prev) => ({ ...prev, email: !isValid }));
    };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  
  const btnState =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.country.trim() !== "" &&
    formData.streetAddress.trim() !== "" &&
    formData.townCity.trim() !== "" &&
    formData.state.trim() !== "" &&
    formData.zip.trim() !== "" &&
    formData.phone.trim() !== "" &&
    isEmailValid;

  const resetData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      streetAddress: "",
      townCity: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
    });
    setAlertMessage({
      firstName: false,
      lastName: false,
      country: false,
      streetAddress: false,
      townCity: false,
      state: false,
      zip: false,
      phone: false,
      email: false,
    });
  };

  return (
    <div className="address-form-container mb-5 w-100">
      <h2 className="address-form-title">My Address</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          resetData();
        }}
      >
        <div className="row g-3 mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="addr-firstName" className="form-label fw-medium">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              id="addr-firstName"
              name="firstName"
              type="text"
              className="form-control address-input"
              placeholder="First Name*"
              onChange={handleChange}
              value={formData.firstName}
            />
            {alertMessage.firstName && (
              <p className="text-danger">First name is required.</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="addr-lastName" className="form-label fw-medium">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              id="addr-lastName"
              name="lastName"
              type="text"
              className="form-control address-input"
              placeholder="Last Name*"
              onChange={handleChange}
              value={formData.lastName}
            />
            {alertMessage.lastName && (
              <p className="text-danger">Last name is required.</p>
            )}
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="addr-company" className="form-label fw-medium">
              Company name (optional)
            </label>
            <input
              id="addr-company"
              name="companyName"
              type="text"
              className="form-control address-input"
              placeholder="Option"
              onChange={handleChange}
              value={formData.companyName}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="addr-country" className="form-label fw-medium">
              Country / Region <span className="text-danger">*</span>
            </label>
            <input
              id="addr-country"
              name="country"
              type="text"
              className="form-control address-input"
              placeholder="Country / Region*"
              onChange={handleChange}
              value={formData.country}
            />
            {alertMessage.country && (
              <p className="text-danger">Country is required.</p>
            )}
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="addr-street" className="form-label fw-medium">
              Street Address <span className="text-danger">*</span>
            </label>
            <input
              id="addr-street"
              name="streetAddress"
              type="text"
              className="form-control address-input"
              placeholder="Street Address*"
              onChange={handleChange}
              value={formData.streetAddress}
            />
            {alertMessage.streetAddress && (
              <p className="text-danger">Street address is required.</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="addr-townCity" className="form-label fw-medium">
              Town / City <span className="text-danger">*</span>
            </label>
            <input
              id="addr-townCity"
              name="townCity"
              type="text"
              className="form-control address-input"
              placeholder="Town / City*"
              onChange={handleChange}
              value={formData.townCity}
            />
            {alertMessage.townCity && (
              <p className="text-danger">Town / city is required.</p>
            )}
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="addr-state" className="form-label fw-medium">
              State <span className="text-danger">*</span>
            </label>
            <input
              id="addr-state"
              name="state"
              type="text"
              className="form-control address-input"
              placeholder="State*"
              onChange={handleChange}
              value={formData.state}
            />
            {alertMessage.state && (
              <p className="text-danger">State is required.</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="addr-zip" className="form-label fw-medium">
              ZIP <span className="text-danger">*</span>
            </label>
            <input
              id="addr-zip"
              name="zip"
              type="text"
              className="form-control address-input"
              placeholder="ZIP*"
              onChange={handleChange}
              value={formData.zip}
            />
            {alertMessage.zip && (
              <p className="text-danger">ZIP is required.</p>
            )}
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="addr-phone" className="form-label fw-medium">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              id="addr-phone"
              name="phone"
              type="text"
              className="form-control address-input"
              placeholder="Phone*"
              onChange={handleChange}
              value={formData.phone}
            />
            {alertMessage.phone && (
              <p className="text-danger">Phone is required.</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="addr-email" className="form-label fw-medium">
              Email <span className="text-danger">*</span>
            </label>
            <input
              id="addr-email"
              name="email"
              type="email"
              className="form-control address-input"
              placeholder="Email*"
              onChange={handleEmail}
              value={formData.email}
            />
            {alertMessage.email && (
              <p className="text-danger">Please enter a valid email address.</p>
            )}
          </div>
        </div>

        <Button
            type="submit"
            className="address-submit-button btn btn-dark"
            disabled={!btnState}
          >
            Save Address
          </Button>
      </form>
    </div>
  );
};

export default MyAddressContent;