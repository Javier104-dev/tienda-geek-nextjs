'use client'; // 👈 use it here
import { getProducts } from '@/app/api/geekStoreProducts';
import { useFetchReducer } from '@/hooks/useFetch';
import '@/styles/main/main.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface className {
  container: string,
}

const Main: React.FC<className> = ({ container }) => {
  const { data, error, loading } = useFetchReducer(getProducts, null);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   if (data) {
  //     const categories = [...new Set(data.map(item => item.category))];
  //     // const products = data.filter((i: any) => i.category === 'categoria');

  //   }
  // }, [data]);
  const prueba = [
    {
      category: 'categoria1',
      products: [
        {
          nombre: 'producto1',
          precio: 45454,
        },        {
          nombre: 'producto1',
          precio: 45454,
        },        {
          nombre: 'producto1',
          precio: 45454,
        },
      ],
    },    {
      category: 'categoria2',
      products: [
        {
          nombre: 'producto2',
          precio: 45454,
        },        {
          nombre: 'producto2',
          precio: 45454,
        },        {
          nombre: 'producto2',
          precio: 45454,
        },
      ],
    },    {
      category: 'categoria3',
      products: [
        {
          nombre: 'producto3',
          precio: 45454,
        },        {
          nombre: 'producto3',
          precio: 45454,
        },        {
          nombre: 'producto3',
          precio: 45454,
        },
      ],
    },
  ];
  
  return (
    <main className='main'>
      <section className={container}>
        {loading && (<div>Cargando</div>)}
        {prueba && (prueba.map((e:any, i:any) => (
          <section
            className='category-section'
            key={i}
          >
            <div className='category-header'>
              <h2 className='category-header__title'>
                {e.category}
              </h2>
              <Link
                className='category-header__a'
                href='#'
              >
                Ver todo...
              </Link>
            </div>
            <div className='category-cards'>
              <div className='category-card'>
                <div className='category-card__container__img'>
                  <Image
                    className='category-card__img'
                    src={'/consolas/consola1.jpg'}
                    alt={'Imagen Producto'}
                    fill
                  />
                </div>
                <div className='category-card__description'>
                  <h1
                    className='category-card__description__name'
                  >
                    Producto 454
                  </h1>
                  <span
                    className='category-card__description__price'
                  >
                    $ 60.00
                  </span>
                  <Link
                    className='category-card__description__a'
                    href='#'
                  >
                    Ver producto
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )))}
        {error && (<div>{error}</div>)}
      </section>
    </main>
  );
};

export default Main;