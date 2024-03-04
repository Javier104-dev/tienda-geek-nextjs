import { getProduct } from '@/app/api/geekStoreProducts';
import { useFetchReducer } from '@/hooks/useFetch';
import Image from 'next/image';
import '@/styles/main/viewProduct.css';
import { IdAndClassName, Product } from '@/interface/interface';

const ViewProduct: React.FC<IdAndClassName> = ({ id, container }) => {
  const { data, error, loading } = useFetchReducer(getProduct, id);
  const product = data as Product;

  return (
    <section className={container}>
      {loading && (<div>Cargando</div>)}
      {product && (
        <>
          <div className='product'>
            <div className='product-container'>
              <Image
                className='product-container__img'
                src={'/consolas/consola1.jpg'}
                alt={'Product'}
                fill
              />
            </div>
            <div className='product-detail'>
              <h1 className='product-detail__name'>
                {product.name}
              </h1>
              <span className='product-detail__price'>
                {`$ ${product.price}`}
              </span>
              <p className='product-detail__description'>
                {product.description}
              </p>
            </div>
          </div>
          <div>
            SIMILARES
          </div>
        </>
      )}
      {error && (<div>{error}</div>)}
    </section>
  );
};

export default ViewProduct;