import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Mian';

const MainContent: React.FC = () => {
  return (
    <>
      <Header
        container={'container'}
      />
      <Banner
        container={'container'}
      />
      <Main
        container={'container'}
      />
      <Footer/>
    </>
  );
};

export default MainContent;
