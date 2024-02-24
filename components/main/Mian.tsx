'use client';

import { getProducts } from '@/app/api/geekStoreProducts';
import { useFetchReducer } from '@/hooks/useFetch';
import '@/styles/main/main.css';
import Image from 'next/image';
import Link from 'next/link';
import { Key, useEffect, useState } from 'react';

interface className {
  container: string,
}

const Main: React.FC<className> = ({ container }) => {
  const { data, error, loading } = useFetchReducer(getProducts, null);
  const [newData, setNewData] = useState<any>();
  
  useEffect(() => {
    if (data) {
      const formattedData = data.reduce((acumulador: any, elemento: any) => {

        if (!acumulador.find((e: any) => e.category === elemento.category)) {
          acumulador.push({ category: elemento.category, products: [] });
        }

        const index = acumulador.findIndex((e: any) => e.category === elemento.category);
        acumulador[index].products.push(elemento);
        return acumulador;
      }, []);
      setNewData(formattedData);
    }
  }, [data]);

  return (
    <main className='main'>
      <section className={container}>
        {loading && (<div>Cargando</div>)}
        {newData && (newData.map((e: any, i: any) => (
          <section
            className='category-section'
            key={e.category}
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
              {(e.products.map((e: any, i: any) => (
                <div
                  className='category-card'
                  key={i}
                >
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
                      {e.name}
                    </h1>
                    <span
                      className='category-card__description__price'
                    >
                      {e.price}
                    </span>
                    <Link
                      className='category-card__description__a'
                      href={`/product/${e.id}`}
                    >
                      Ver producto
                    </Link>
                  </div>
                </div>
              )))}
            </div>
          </section>
        )))}
        {error && (<div>{error}</div>)}
      </section>
    </main>
  );
};

export default Main;