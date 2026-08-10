import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import "./LogIn.css";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "user",
    password: "12345678",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <PageHeader
        title="Login"
        description="Sign in to access your personalized experience."
      />

      <div className="container d-flex align-items-center justify-content-center bg-white py-4">
        <div className="row w-100 justify-content-center gx-5 gy-1">
          <div className="col-12 col-md-6 col-lg-5">
            <h2 className="fw-semibold text-dark mb-4 pb-2">Login</h2>

            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="form-label text-secondary small fw-medium mb-2">
                  Username or email address{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="Username or email address*"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control form-control-lg shadow-none border-secondary-subtle"
                  style={{ borderRadius: "8px", fontSize: "16px" }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-secondary small fw-medium mb-2">
                  Password <span className="text-danger">*</span>
                </label>
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control form-control-lg shadow-none border-secondary-subtle pe-5"
                    style={{ borderRadius: "8px", fontSize: "16px" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent text-secondary px-3"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    style={{ zIndex: 5 }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4 small">
                <div className="form-check d-flex align-items-center gap-2 m-0 ps-0">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="form-check-input m-0 shadow-none border-secondary-subtle"
                    style={{
                      cursor: "pointer",
                      width: "18px",
                      height: "18px",
                    }}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="form-check-label text-secondary fw-medium pt-1"
                    style={{ cursor: "pointer", userSelect: "none" }}
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#forgot-password"
                  className="fw-semibold text-dark text-decoration-underline"
                  style={{ textUnderlineOffset: "4px" }}
                >
                  Forgot Your Password?
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-dark fw-semibold px-5 py-3 rounded-pill hover-opacity mt-2"
                style={{ backgroundColor: "#0D0D0D" }}
              >
                Login
              </button>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-5 pt-md-2">
            <h2 className="fw-semibold text-dark mb-3">New Customer</h2>
            <p
              className="text-secondary lh-lg mb-4"
              style={{ fontSize: "15px" }}
            >
              Be part of our growing family of new customers! Join us today and
              unlock a world of exclusive benefits, offers, and personalized
              experiences.
            </p>
            <button
              type="button"
              className="btn btn-dark fw-semibold px-5 py-3 rounded-pill hover-opacity"
              style={{ backgroundColor: "#0D0D0D" }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
