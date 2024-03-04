import { Product } from '@/interface/interface';

const saveProduct = async (fetchResource:any, body: Product, message: string) => {
  const formData: FormData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    const response = await fetchResource(formData);
    window.alert(message);
    return response;
  } catch (error: any) {
    window.alert(error.message);
  }
};

export {
  saveProduct,
};
