import "./Gallery.css";
import {useState} from 'react'
import product1 from "../../../assets/Product Page/product-1.jpg";
import product2 from "../../../assets/Product Page/product-2.jpg";
import product4 from "../../../assets/Product Page/product-4.jpg";
import product5 from "../../../assets/Product Page/product-5.jpg";
import detail1 from "../../../assets/Product Page/detail-1_3.jpg";
import detail2 from "../../../assets/Product Page/detail-1_4.jpg";

const Gallery = () => {
  const thumbnails = [detail1,product1, product2, product4, product5,detail2];
  const [mainImg,setMainImg]=useState(product1)
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
              <div key={index} className="thumb-item ">
                <div className=" gallery-thumb cursor-pointer" style={{border:mainImg=== imgSrc?'1px solid black':'none'}} onClick={()=>{
                  setMainImg(imgSrc)
                }}>
                  <img src={imgSrc} className="img-fluid" />
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
