import { Link } from 'react-router-dom';
import './NotFound.css'; 

import notFoundSvg from '../../assets/404/404.svg'; 

const NotFound = () => {
  return (
    <div className="not-found-container d-flex align-items-center justify-content-center py-5 bg-white">
      <div className="text-center px-3">
        
        <div className="mb-4">
          <img 
            src={notFoundSvg}
            alt="404 Not Found" 
            className="img-fluid not-found-img" 
          />
        </div>

        <h1 className="not-found-title mb-2">Something’s Missing</h1>
        <p className="not-found-text mb-4">
          This page is missing or you assembled the link incorrectly
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-dark-custom px-4 py-2">
            Back to home page
          </Link>
          <Link to="/shop-left-sidebar" className="btn btn-outline-custom px-4 py-2">
            Product list
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;