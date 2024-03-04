import { Product } from '@/interface/interface';

const GEEK_STORE_PRODUCT: string = 'http://127.0.0.1:8080/geekstore/product';

const getProducts = async (): Promise<Product[]> => {
  const response: Response = await fetch(GEEK_STORE_PRODUCT);

  if (!response.ok) throw new Error('Api Error');

  return response.json();
};

const getProduct = async (id: number): Promise<Product> => {
  const response: Response = await fetch(`${GEEK_STORE_PRODUCT}/${id}`);

  if (!response.ok) throw new Error('Api Error');

  return response.json();
};

const addProduct = async (formData: FormData): Promise<Product> => {
  const response: Response = await fetch(GEEK_STORE_PRODUCT, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
};

export {
  getProducts,
  getProduct,
  addProduct,
};