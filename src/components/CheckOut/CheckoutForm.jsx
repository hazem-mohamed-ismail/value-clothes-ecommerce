import { useState } from "react";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    street: "",
    postalCode: "",
    note: "",
  });

  const [alertMessage, setAlertMessage] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    city: false,
    postalCode: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Email validation
    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setAlertMessage((prev) => ({ ...prev, email: !isValid }));
      return;
    }

    // Phone validation
    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      setAlertMessage((prev) => ({ ...prev, phone: digits.length < 7 }));
      return;
    }

    // Other fields - just check if empty
    setAlertMessage((prev) => ({
      ...prev,
      [name]: name !== "street" && name !== "country" && name !== "note" && value.trim() === ""
    }));
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const phoneDigits = formData.phone.replace(/\D/g, "");
  const isPhoneValid = phoneDigits.length >= 7;

  const btnState =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    isEmailValid &&
    isPhoneValid &&
    formData.city.trim() !== "" &&
    formData.postalCode.trim() !== "" &&
    paymentMethod !== "";

  const resetData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      street: "",
      postalCode: "",
      note: "",
    });
    setAlertMessage({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      city: false,
      postalCode: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!btnState) return;
    resetData();
  };

  return (
    <div className="col-lg-7">
      <form onSubmit={handleSubmit}>
        <div
          className="p-4 mb-4 rounded"
          style={{ backgroundColor: "#f7f7f7" }}
        >
          <p className="mb-3 text-dark fs-6">
            Already have an account?{" "}
            <span className="text-decoration-underline fw-bold cursor-pointer text-dark">
              Login Here
            </span>
          </p>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control py-2 text-dark border-light-subtle"
                placeholder="Your name/Email"
              />
            </div>
            <div className="col-md-6 position-relative">
              <input
                type="password"
                className="form-control py-2 text-dark border-light-subtle pe-5"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="btn btn-dark rounded-pill px-4 btn-sm" type="button">
            Login
          </button>
        </div>

        <div className="mb-4">
          <h2 className="h5 text-dark fw-medium mb-4">Information</h2>
          <p className="text-muted small mb-3">
            <span className="text-danger">*</span> indicates a required field
          </p>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label text-dark fw-500 mb-2">
                First Name <span className="text-danger">*</span>{" "}
                <span className="text-danger fw-normal small">(required)</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="form-control py-2 text-dark border-light-subtle"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {alertMessage.firstName && (
                <p className="text-danger small mt-1">First name is required.</p>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label text-dark fw-500 mb-2">
                Last Name <span className="text-danger">*</span>{" "}
                <span className="text-danger fw-normal small">(required)</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="form-control py-2 text-dark border-light-subtle"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {alertMessage.lastName && (
                <p className="text-danger small mt-1">Last name is required.</p>
              )}
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label text-dark fw-500 mb-2">
                Email Address <span className="text-danger">*</span>{" "}
                <span className="text-danger fw-normal small">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control py-2 text-dark border-light-subtle"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {alertMessage.email && (
                <p className="text-danger small mt-1">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label text-dark fw-500 mb-2">
                Phone Number <span className="text-danger">*</span>{" "}
                <span className="text-danger fw-normal small">(required)</span>
              </label>
              <input
                type="text"
                name="phone"
                className="form-control py-2 text-dark border-light-subtle"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {alertMessage.phone && (
                <p className="text-danger small mt-1">
                  Please enter a valid phone number.
                </p>
              )}
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-12">
              <label className="form-label text-dark fw-500 mb-2">
                Country / Region <span className="text-muted small">(optional)</span>
              </label>
              <select
                name="country"
                className="form-select py-2 text-dark border-light-subtle custom-select-icon w-100"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Choose Country / Region
                </option>
                <option value="US">United States</option>
                <option value="EG">Egypt</option>
              </select>
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label text-dark fw-500 mb-2">
                Town/City <span className="text-danger">*</span>{" "}
                <span className="text-danger fw-normal small">(required)</span>
              </label>
              <input
                type="text"
                name="city"
                className="form-control py-2 text-dark border-light-subtle"
                placeholder="Town/City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              {alertMessage.city && (
                <p className="text-danger small mt-1">City is required.</p>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label text-dark fw-500 mb-2">
                Street <span className="text-muted small">(optional)</span>
              </label>
              <input
                type="text"
                name="street"
                className="form-control py-2 text-dark border-light-subtle"
                placeholder="Street, Building, etc."
                value={formData.street}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label text-dark fw-500 mb-2">
                State / Province <span className="text-muted small">(optional)</span>
              </label>
              <select
                className="form-select py-2 text-dark border-light-subtle custom-select-icon w-100"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Choose State
                </option>
                <option value="CA">California</option>
                <option value="C">Cairo</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label text-dark fw-500 mb-2">
                Postal Code <span className="text-danger">*</span>{" "}
                <span className="text-danger fw-normal small">(required)</span>
              </label>
              <input
                type="text"
                name="postalCode"
                className="form-control py-2 text-dark border-light-subtle"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
              {alertMessage.postalCode && (
                <p className="text-danger small mt-1">Postal code is required.</p>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-dark fw-500 mb-2">
              Order Notes <span className="text-muted small">(optional)</span>
            </label>
            <textarea
              name="note"
              className="form-control py-2 text-dark border-light-subtle"
              rows="3"
              placeholder="Write note (e.g., delivery instructions)..."
              value={formData.note}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="h5 text-dark fw-normal mb-3">Choose Payment Option:</h2>

          <div className="d-flex flex-column gap-2">
            <label className="d-flex align-items-center p-3 border rounded cursor-pointer custom-payment-option">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-check-input custom-radio border-secondary-subtle"
              />
              <span className="ms-2 text-dark fs-6">Cash On Delivery</span>
            </label>

            <label className="d-flex align-items-center p-3 border rounded cursor-pointer custom-payment-option">
              <input
                type="radio"
                name="payment"
                value="apple"
                checked={paymentMethod === "apple"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-check-input custom-radio border-secondary-subtle"
              />
              <span className="ms-2 text-dark fs-6 d-inline-flex align-items-center gap-1">
                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.40781 3.71076C7.30791 3.78688 8.20801 3.25405 8.77057 2.5785C9.32376 1.88392 9.68943 0.951477 9.59567 0C8.7987 0.0380591 7.81422 0.532827 7.25165 1.2274C6.73597 1.82684 6.29529 2.79734 6.40781 3.71076ZM7.48524 4.36638C8.06968 4.13349 8.79323 3.84517 9.5862 3.89149C10.0925 3.92955 11.5552 4.08178 12.4928 5.48997C12.4885 5.49324 12.479 5.49952 12.4648 5.50884C12.2329 5.66192 10.7593 6.63438 10.777 8.55372C10.7946 10.8404 12.6301 11.6931 12.8703 11.8047C12.8859 11.812 12.8948 11.8161 12.896 11.8173C12.8949 11.8204 12.8931 11.8265 12.8903 11.8355C12.8424 11.9928 12.5267 13.0293 11.8083 14.0913C11.1426 15.0808 10.4582 16.0513 9.37055 16.0704C8.85873 16.0797 8.51395 15.9284 8.15493 15.771C7.77735 15.6054 7.38401 15.4329 6.76401 15.4329C6.12175 15.4329 5.71042 15.61 5.31447 15.7805C4.97054 15.9286 4.63821 16.0717 4.17622 16.0894C3.1261 16.1275 2.32914 15.0428 1.66344 14.0532C0.30391 12.0552 -0.736832 8.42051 0.669576 5.9657C1.35403 4.7383 2.60104 3.9676 3.94182 3.94858C4.52677 3.93778 5.08457 4.16266 5.57247 4.35935C5.94482 4.50946 6.27645 4.64315 6.54836 4.64315C6.79066 4.64315 7.10915 4.51624 7.48524 4.36638Z"
                    fill="#101010"
                  ></path>
                </svg>
                Apple Pay
              </span>
            </label>

            <label className="d-flex align-items-center p-3 border rounded cursor-pointer custom-payment-option">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-check-input custom-radio border-secondary-subtle"
              />
              <span
                className="ms-2 fw-bold fst-italic fs-6"
                style={{ color: "#003087" }}
              >
                PayPal
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={!btnState}
          className="btn btn-dark w-100 py-3 rounded-pill fw-medium"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}