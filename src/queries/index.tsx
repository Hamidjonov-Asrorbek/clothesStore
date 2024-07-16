"server-only";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

interface Product {
  // Add other product fields here, e.g., name, price, etc.
  name: string;
  price: number;
  description: string;
}

interface ProductWithId extends Product {
  id: string;
}

export async function GetNewArrivals(): Promise<ProductWithId[]> {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products: ProductWithId[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as Product;
    products.push({ ...data, id: doc.id });
  });

  // console.log("Products data:", products);
  return products;
}
export async function GetTopSelling(): Promise<ProductWithId[]> {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products: ProductWithId[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as Product;
    products.push({ ...data, id: doc.id });
  });

  // console.log("Products data:", products);
  return products;
}
