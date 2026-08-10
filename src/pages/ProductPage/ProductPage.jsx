import Gallery from "../../components/ProductPage/Gallery/Gallery";
import ProductDetails from "../../components/ProductPage/ProductDetails/ProductDetails";
import DescriptionSection from "../../components/ProductPage/DescriptionSection/DescriptionSection";
import RelatedProducts from "../../components/ProductPage/RelatedProducts/RelatedProducts";
import SizeGuide from "../../components/ProductPage/SizeGuide/SizeGuide";
import products from "../../data/products.json";

export default function ProductPage() {
  const product = products.find((item) => item.id === 13);

  return (
    <div className="container my-5">
      <SizeGuide/>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <Gallery key={product?.id} product={product} />
        </div>

        <div className="col-lg-6 col-md-12">
          <ProductDetails/>
        </div>
      </div>

      <DescriptionSection />
      <RelatedProducts />
    </div>
  );
}
