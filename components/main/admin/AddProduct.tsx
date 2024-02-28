const AddProduct: React.FC = () => {
  return (
    <section>
      <form>
        <h1>Agregar nuevo producto</h1>
        <div>
          <label>Imagen</label>
          <input type='file' />
        </div>
        <div>
          <label>Categoría</label>
          <input />
        </div>
        <div>
          <label>Precio</label>
          <input type='number' />
        </div>
        <div>
          <label>Descripción del producto</label>
          <input />
        </div>
        <button type='submit'>Agregar producto</button>
      </form>
    </section>
  );
};

export default AddProduct;