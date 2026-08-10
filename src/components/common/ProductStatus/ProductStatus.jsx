import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import "./ProductStatus.css";


// this component shows the state of products that coming from API
//   whether it is loading or there is an error connection
export default function ProductStatus({ loading, error, className = "" }) {
  if (!loading && !error) return null;

  return (
    <div
      className={`product-status ${error ? "product-status-error" : ""} ${className}`}
      role={error ? "alert" : "status"}
    >
      {loading ? (
        <CircularProgress aria-label="Loading..." color="dark" />
      ) : (
        <>
          <FontAwesomeIcon icon={faWifi} size="2x" aria-hidden="true" />
          <p>Connection error. Please check your internet connection.</p>
        </>
      )}
    </div>
  );
}
