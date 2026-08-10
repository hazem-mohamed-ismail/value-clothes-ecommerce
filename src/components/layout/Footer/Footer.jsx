import "./Footer.css";

export default function Footer(){
  return (
    <footer className="custom-footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-10 col-md-6 col-lg-4">
            <img src="src/assets/logo.svg" className="footer-logo mb-3" />
            <p className="text-muted mb-1">
              600 N Michigan Ave, Chicago, IL 60611, USA
            </p>
            <p className="text-muted mb-1">hi.amere@gmail.com</p>
            <p className="text-muted mb-4">315-666-6688</p>

            <div className="d-flex gap-2">
              <span className="social-icon">
                <i className="bi bi-facebook"></i>
              </span>
              <span className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </span>
              <span className="social-icon">
                <i className="bi bi-instagram"></i>
              </span>
              <span className="social-icon">
                <i className="bi bi-tiktok"></i>
              </span>
              <span className="social-icon">
                <i className="bi bi-snapchat"></i>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading mb-3">COMPANY</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#stories">Our Stories</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
              <li>
                <a href="#news">Latest New</a>
              </li>
              <li>
                <a href="#account">My Account</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading mb-3">CUSTOMER</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#shipping">Shipping</a>
              </li>
              <li>
                <a href="#refund">Return & Refund</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#faqs">Orders FAQs</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h5 className="footer-heading mb-3">NEWSLETTER</h5>
            <p className="text-muted mb-3">
              Subscribe for store updates and discounts.
            </p>

            <div className="input-group-custom mb-3">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="form-control newsletter-input"
              />
              <button className=" newsletter-btn">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <p className="text-muted small-text">
              By clicking subscribe, you agree to the{" "}
              <a
                href="#terms"
                className="text-dark fw-bold text-decoration-underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#privacy"
                className="text-dark fw-bold text-decoration-underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        <hr className="my-4 text-muted opacity-25" />

        <div className="row align-items-center justify-content-between g-3">
          <div className="col-12 col-md-auto d-flex justify-content-center gap-3">
            <select
              className="form-select  form-select-sm border-0 bg-transparent text-muted select-custom"
              aria-label="Select currency"
              defaultValue="EGP"
            >
              <option value="USD">USD ($)</option>
              <option value="EGP">EGP (E£)</option>
            </select>
            <select className="form-select  form-select-sm border-0 bg-transparent text-muted select-custom">
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="col-12 col-md-auto text-center text-muted">
            <span>This project was built by <strong style={{color:'#d94646'}}>Hazem Mohamed Ismail</strong></span>
          </div>

          <div className="col-12 col-md-auto text-md-end">
            <div className="d-flex gap-2 justify-content-center justify-content-md-end">
              <span className="payment-badge"><img src="src/assets/footer/payments/visa.svg" className="w-100 h-100" alt="" /></span>
              <span className="payment-badge"><img src="src/assets/footer/payments/master-card.svg" className="w-100 h-100" alt="" /></span>
              <span className="payment-badge"><img src="src/assets/footer/payments/paypal.svg" className="w-100 h-100" alt="" /></span>
              <span className="payment-badge"><img src="src/assets/footer/payments/discover.svg" className="w-100 h-100" alt="" /></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
