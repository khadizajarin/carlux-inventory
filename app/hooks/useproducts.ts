import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
}

interface ProductsResponse {
  products: Product[];
}

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://dummyjson.com/products/category/vehicle");
  if (!res.ok) throw new Error("Failed to fetch vehicles");
  const data: ProductsResponse = await res.json();
//   console.log(data.products);
  return data.products;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
