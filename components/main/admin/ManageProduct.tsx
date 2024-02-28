'use client';

import { getProducts } from '@/app/api/geekStoreProducts';
import { useFetchReducer } from '@/hooks/useFetch';
import Image from 'next/image';
import '@/styles/main/adminMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface className {
  container: string,
};

const ManageProduct: React.FC<className> = ({ container }) => {
  const { data, error, loading } = useFetchReducer(getProducts, null);
  const router = useRouter();

  return (
    <section className={container}>
      {loading && (<div>Cargando</div>)}
      {data && (
        <div className='edit-container'>
          <div className='edit-header'>
            <h1 className='edit-header__title'>
              Todos los productos
            </h1>
            <button
              className='edit-header__button'
              onClick={() => {
                router.push('/admin/product/add');
              }}
            >
              Agregar producto
            </button>
          </div>
          <div className='edit-cards'>
            {data.map((e: any) => (
              <div
                className='edit-card'
                key={e.id}
              >
                <div className='edit-card__container'>
                  <Image
                    className='edit-card__container__img'
                    src={'/consolas/consola1.jpg'}
                    alt={'Product'}
                    fill
                  />
                  <div className='edit-card__container__icon'>
                    <Link
                      className=''
                      href={''}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' />
                    </Link>
                    <Link
                      className=''
                      href={''}
                    >
                      <FontAwesomeIcon icon={faTrashCan} className='delete-icon' />
                    </Link>
                  </div>
                </div>
                <div className='edit-card__detail'>
                  <span className='edit-card__detail__name'>
                    {e.name}
                  </span>
                  <span className='edit-card__detail__price'>
                    {`$ ${e.price}`}
                  </span>
                  <span className='edit-card__detail__id'>
                    {`id: ${e.id}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {error && (<div>error</div>)}
    </section>
  );
};

export default ManageProduct;