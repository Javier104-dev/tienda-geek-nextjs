import '@/styles/main/addProduct.css';

const AddProduct: React.FC = () => {
  return (
    <section>
      <form className='add-form'>
        <h1 className='add-form__title'>Agregar nuevo producto</h1>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Imagen</label>
          <input className='add-form-div__input__file' type='file' />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Categoría</label>
          <input className='add-form-div__input' type='text' />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Nombre del producto</label>
          <input className='add-form-div__input' type='text' />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Precio</label>
          <input className='add-form-div__input' type='number' />
        </div>
        <div className='add-form-div'>
          <label className='add-form-div__name'>Descripción del producto</label>
          <textarea className='add-form-div__input' rows={10}/>
        </div>
        <button className='add-form-button' type='submit'>Agregar producto</button>
      </form>
    </section>
  );
};

export default AddProduct;