import { getProducts } from '@/app/api/geekStoreProduts';
import '@/styles/main/main.css';
import Image from 'next/image';
import Link from 'next/link';

interface className {
  container: string,
}

const Main: React.FC<className> = async ({ container }) => {
  const categotias: Array<string> = ['cargo', 'tipe', 'grande'];
  return (
    <main className='main'>
      <section className={container}>
        {categotias.map((e, i) => (
          <section
            className='category-section'
            key={i}
          >
            <div className='category-header'>
              <h2 className='category-header__title'>
                {e}
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
        ))}
      </section>
    </main>
  );
};

export default Main;