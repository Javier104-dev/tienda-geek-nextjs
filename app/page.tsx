import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Mian';
import '@/styles/globals/globals.css';

const MainContent: React.FC = () => {
  return (
    <>
      <Header
        container={'container'}
      />
      <Banner/>
      <Main/>
      <Footer/>
    </>
  );
};

export default MainContent;
