const GEEK_STORE_PRODUCT: string = 'http://127.0.0.1:8080/geekstore/product';

const getProducts = async () => {
  const products = await fetch(GEEK_STORE_PRODUCT);
  return products.json();
};

const getProduct = async (id: number) => {
  const product = await fetch(`${GEEK_STORE_PRODUCT}/${id}`);
  return product.json();
};

export {
  getProducts,
  getProduct
};