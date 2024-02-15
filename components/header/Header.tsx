import Image from 'next/image';

interface className {
  container: string,
}

const Header: React.FC<className> = ({ container }) => {
  return (
    <header>
      <section className={container}>
        <div>
          <Image 
            src={'/Logo.png'}
            alt={'Logo tienda'}
            height={51}
            width={176}
          />
          <input
            placeholder='¿Qué deseas buscar?'
          />
          <Image
            src={'/lupa.png'}
            alt={'Icono busqueda'}
            height={18}
            width={18}
          />
        </div>
        <button>
          Login
        </button>
      </section>
    </header>
  );
};

export default Header;