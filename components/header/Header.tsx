import Image from 'next/image';
import '@/styles/header/header.css';

interface className {
  container: string,
}

const Header: React.FC<className> = ({ container }) => {
  return (
    <header>
      <section className={'header-section ' + container}>
        <nav className='header-nav'>
          <Image 
            src={'/Logo.png'}
            alt={'Logo tienda'}
            height={51}
            width={176}
          />
          <div className='header-search'>
            <input
              className='header-search__input'            
              placeholder='¿Qué deseas buscar?'
            />
            <Image
              className='header-search__button'
              src={'/lupa.png'}
              alt={'Icono busqueda'}
              height={18}
              width={18}
            />
          </div>
        </nav>
        <button className='header-login'>
          Login
        </button>
      </section>
    </header>
  );
};

export default Header;