import { Product } from '@/interface/interface';

const GEEK_STORE_PRODUCT: string = 'http://127.0.0.1:8080/geekstore/product';

const getProducts = async (): Promise<Product[]> => {
  const products: Response = await fetch(GEEK_STORE_PRODUCT);
  return products.json();
};

const getProduct = async (id: number): Promise<Product> => {
  const product: Response = await fetch(`${GEEK_STORE_PRODUCT}/${id}`);
  return product.json();
};

export {
  getProducts,
  getProduct
};