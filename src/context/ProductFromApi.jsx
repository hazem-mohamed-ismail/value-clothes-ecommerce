import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();
function ProductFromApi({ children }) {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getProductsData() {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products",
        );
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
      } finally {
         
        setLoading(false);
      }
    }

    getProductsData();
  }, []);

  return (
    <ProductContext.Provider value={{ productsData, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}

export default ProductFromApi;
