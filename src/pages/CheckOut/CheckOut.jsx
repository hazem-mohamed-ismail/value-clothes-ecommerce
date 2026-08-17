import PageHeader from "../../components/common/PageHeader/PageHeader";
import CheckoutForm from "../../components/CheckOut/CheckoutForm";
import CheckoutSummary from "../../components/CheckOut/CheckoutSummary";
import ProductStatus from "../../components/common/ProductStatus/ProductStatus";
import { useProductContext } from "../../context/ProductFromApi";
import "./CheckOut.css";

export default function CheckOut() {
  const { loading, error } = useProductContext();

  return (
    <>
      <PageHeader
        title={"Check Out"}
        description={
          "Review your order details carefully and complete your purchase securely and easily for a smooth shopping experience."
        }
      />

      {loading || error ? <ProductStatus loading={loading} error={error} /> : (
        <div className="container my-5 text-secondary">
          <div className="row g-5">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
      )}
    </>
  );
}