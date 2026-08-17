import "./Gallery.css";
import { useState } from "react";
import product2 from "../../../assets/Product Page/product-2.jpg";
import product4 from "../../../assets/Product Page/product-4.jpg";
import product5 from "../../../assets/Product Page/product-5.jpg";
import detail1 from "../../../assets/Product Page/detail-1_3.jpg";

const Gallery = ({ product }) => {
  const [mainImg, setMainImg] = useState(product.image);


  const thumbnails = [
    detail1,
    product.image,
    product2,
    product4,
    product5,
  ];

  return (
    <div className="gallery-wrapper ">
      <div className="row g-3 align-items-start">
        <div className="col-12 col-md-10">
          <div className="gallery-main-image">
            <img src={mainImg} alt="Main product" />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className="thumbnails-row">
            {thumbnails.map((imgSrc, index) => (
              <div key={`${imgSrc}-${index}`} className="thumb-item ">
                <div
                  className="gallery-thumb cursor-pointer"
                  style={{
                    border: mainImg === imgSrc ? "1px solid black" : "none",
                  }}
                  onClick={() => {
                    setMainImg(imgSrc);
                  }}
                >
                  <img
                    src={imgSrc}
                    className="img-fluid"
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
