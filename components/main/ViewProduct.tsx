import { getProduct } from '@/app/api/geekStoreProducts';
import { useFetchReducer } from '@/hooks/useFetch';
import Image from 'next/image';
import '@/styles/main/viewProduct.css';

interface product {
  id: number,
  container: string,
};

const ViewProduct: React.FC<product> = ({ id, container }) => {
  const { data, error, loading } = useFetchReducer(getProduct, id);

  return (
    <main className='main'>
      <section
        className={container}
      >
        {loading && (
          <div>Cargando</div>
        )}
        {data && (
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
                  {data.name}
                </h1>
                <span className='product-detail__price'>
                  {`$ ${data.price}`}
                </span>
                <p className='product-detail__description'>
                  {data.description}
                </p>
              </div>
            </div>
            <div>
              SIMILARES
            </div>
          </>
        )}
        {error && (
          <div>
            error
          </div>
        )}
      </section>
    </main>

  );
};

export default ViewProduct;