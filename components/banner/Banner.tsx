import '@/styles/banner/banner.css';
import Link from 'next/link';

interface className {
  container: string,
}

const Banner: React.FC<className> = ({ container }) => {
  return (
    <section className='banner'>
      <div className={'banner-content ' + container}>
        <div className='banner-titles'>
          <h1
            className='banner-titles__title'
          >Febrero Promocional</h1>
          <h2
            className='banner-titles__subtitle'
          >Productos seleccionados con 33% de descuento</h2>
          <Link
            className='banner-titles__button'
            href='#'
          >
            Ver Consolas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;