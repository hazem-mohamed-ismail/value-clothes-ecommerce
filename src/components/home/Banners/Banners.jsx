import "./Banners.css";
import banners from "../../../data/banners.json";
import { Link } from "react-router-dom";

export default function Banners() {
  const renderInfiniteBanners = banners.map((banner,index) => {
    return (
        <div className="infinite-banner-item" key={index}>
            <Link to="/shop-left-sidebar" className="cls-wrap">
              <h4>{banner.title}</h4>
              <div className="img-cls">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  width="100"
                  height="100"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>)
  });


  return (
    <div className=" my-5">

      <div className="banner-grid mb-2">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="banner-item">
              <img
                src="src/assets/products/banner-lookbook-1.jpg"
                alt="Banner 1"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="banner-item">
              <img
                src="src/assets/products/banner-lookbook-2.jpg"
                alt="Banner 2"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="infinite-banner my-3 py-2">
        
        <div className="group d-flex flex-row">
          {renderInfiniteBanners}
        </div>

        <div className="group d-flex flex-row">
         {renderInfiniteBanners}
        </div>

      </div>
    </div>
  );
}

