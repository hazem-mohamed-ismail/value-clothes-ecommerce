import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";


const ProductContext = createContext();
function ProductFromApi({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProductsData() {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products",
        );
        setData(
          response.data.map((product) => ({
            ...product,
            type: product.category?.name ?? "Products",
            image: product.images?.[0] ?? "",
            originalPrice: product.price,
            rating: product.rating?.rate ?? 0,
            discount: 0,
            trend: false,
          })),
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    getProductsData();
  }, []);

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}

export default ProductFromApi;
