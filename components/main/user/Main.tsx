'use client';

import { getProducts } from '@/app/api/geekStoreProducts';
import { useFetchReducer } from '@/hooks/useFetch';
import { Categories, ClassName, Product } from '@/interface/interface';
import '@/styles/main/main.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Main: React.FC<ClassName> = ({ container }) => {
  const { data, error, loading } = useFetchReducer(getProducts, 0);
  const [newData, setNewData] = useState<Categories[]>();

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const formattedData: Categories[] = data.reduce((acumulador: Categories[], elemento: Product) => {

        if (!acumulador.find((e: Categories) => e.category === elemento.category)) {
          acumulador.push({ category: elemento.category, products: [] });
        }

        const index = acumulador.findIndex((e: Categories) => e.category === elemento.category);
        acumulador[index].products.push(elemento);
        return acumulador;
      }, []);
      setNewData(formattedData);
    }
  }, [data]);

  return (
    <section className={'main-section ' + container}>
      {loading && (<div>Cargando</div>)}
      {newData && (newData.map((e: any, i: any) => (
        <div
          className='category-container'
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
                <div className='category-card__container'>
                  <Image
                    className='category-card__container__img'
                    src={'/consolas/consola1.jpg'}
                    alt={'Product'}
                    fill
                  />
                </div>
                <div className='category-card__description'>
                  <h1 className='category-card__description__name'>
                    {e.name}
                  </h1>
                  <span className='category-card__description__price'>
                    {`$ ${e.price}`}
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
        </div>
      )))}
      {error && (<div>{error}</div>)}
    </section>
  );
};

export default Main;