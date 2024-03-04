'use client';

import { addProduct } from '@/app/api/geekStoreProducts';
import { Product } from '@/interface/interface';
import '@/styles/main/addProduct.css';
import { saveProduct } from '@/utilities/api';
import { setData } from '@/utilities/setData';
import { useState } from 'react';

const AddProduct: React.FC = () => {
  const [dataForm, setDataForm] = useState<Product>({
    image: null,
    category: '',
    name: '',
    price: 0,
    description: '',
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const la = await saveProduct(
      addProduct,
      dataForm,
      'Producto agregado con exito'
    );
  };

  return (
    <section>
      <form className='add-form' onSubmit={onSubmit}>
        <h1 className='add-form__title'>Agregar nuevo producto</h1>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Imagen</label>
          <input
            className='add-form-div__input__file'
            type='file'
            name='image'
            onChange={(e) => setData(e, dataForm, setDataForm)}
          />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Categoría</label>
          <input
            className='add-form-div__input'
            type='text'
            value={dataForm.category}
            name='category'
            onChange={(e) => setData(e, dataForm, setDataForm)}
          />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Nombre del producto</label>
          <input
            className='add-form-div__input'
            type='text'
            value={dataForm.name}
            name='name'
            onChange={(e) => setData(e, dataForm, setDataForm)}
          />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Precio</label>
          <input
            className='add-form-div__input'
            type='number'
            value={dataForm.price || ''}
            name='price'
            onChange={(e) => setData(e, dataForm, setDataForm)}
          />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Descripción del producto</label>
          <textarea
            className='add-form-div__input'
            rows={10}
            value={dataForm.description}
            name='description'
            onChange={(e) => setData(e, dataForm, setDataForm)}
          />
        </div>
        <button className='add-form-button' type='submit'>Agregar producto</button>
      </form>
    </section>
  );
};

export default AddProduct;