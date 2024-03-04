'use client';

import Image from 'next/image';
import '@/styles/header/header.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ClassName } from '@/interface/interface';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const Header: React.FC<ClassName> = ({ container }) => {
  const router: AppRouterInstance = useRouter();

  return (
    <header className='header'>
      <section className={'header-section ' + container}>
        <nav className='header-nav'>
          <Link
            className='header-nav__a'
            href={'/'}
          >
            <Image
              src={'/Logo.png'}
              alt={'Logo tienda'}
              height={51}
              width={176}
            />
          </Link>
          <div className='header-search'>
            <input
              className='header-search__input'
              placeholder='¿Qué deseas buscar?'
            />
            <button className='header-search__button'>
              <Image
                src={'/lupa.png'}
                alt={'Icono busqueda'}
                height={18}
                width={18}
              />
            </button>
          </div>
        </nav>
        <button
          className='header-login'
          onClick={() => {
            router.push('/admin/product');
          }}
        >
          Login
        </button>
      </section>
    </header>
  );
};

export default Header;