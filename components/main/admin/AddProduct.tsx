'use client';

import { Product, TargetValue } from '@/interface/interface';
import '@/styles/main/addProduct.css';
import { useState } from 'react';

const AddProduct: React.FC = () => {
  const [dataForm, setDataForm] = useState<Product>({
    category: '',
    name: '',
    price: 0,
    description: '',
  });

  const setData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value }: TargetValue = e.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  
  return (
    <section>
      <form className='add-form'>
        <h1 className='add-form__title'>Agregar nuevo producto</h1>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Imagen</label>
          <input
            className='add-form-div__input__file'
            type='file'
          />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Categoría</label>
          <input
            className='add-form-div__input'
            type='text'
            value={dataForm.category}
            name='category'
            onChange={setData}
          />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Nombre del producto</label>
          <input
            className='add-form-div__input'
            type='text'
            value={dataForm.name}
            name='name'
            onChange={setData}
          />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Precio</label>
          <input
            className='add-form-div__input'
            type='number'
            value={dataForm.price || ''}
            name='price'
            onChange={setData}
          />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Descripción del producto</label>
          <textarea
            className='add-form-div__input'
            rows={10}
            value={dataForm.description}
            name='description'
            onChange={setData}
          />
        </div>
        <button className='add-form-button' type='submit'>Agregar producto</button>
      </form>
    </section>
  );
};

export default AddProduct;