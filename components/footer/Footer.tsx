import '@/styles/footer/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <span>Desarrollado por Javier Villca</span>
        <span>{currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;