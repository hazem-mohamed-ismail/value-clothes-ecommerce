import Gallery from "../../components/ProductPage/Gallery/Gallery";
import ProductDetails from "../../components/ProductPage/ProductDetails/ProductDetails";
import DescriptionSection from "../../components/ProductPage/DescriptionSection/DescriptionSection";
import RelatedProducts from "../../components/ProductPage/RelatedProducts/RelatedProducts";
import SizeGuide from "../../components/ProductPage/SizeGuide/SizeGuide";
import ProductStatus from "../../components/common/ProductStatus/ProductStatus";
import { useProductContext } from "../../context/ProductFromApi";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const { productsData, loading, error } = useProductContext();
  const product = productsData.find((item) => Number(item.id) === Number(id));

  if (loading) {
    return <ProductStatus loading={loading} />;
  }

  if (error) {
    return <ProductStatus error={error} />;
  }

  if (!product) {
    return <ProductStatus loading={false} error={true} />;
  }

  return (
    <div className="container my-5">
      <SizeGuide/>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <Gallery key={product.id} product={product} />
        </div>

        <div className="col-lg-6 col-md-12">
          <ProductDetails product={product} />
        </div>
      </div>

      <DescriptionSection product={product} />
      <RelatedProducts />
    </div>
  );
}
