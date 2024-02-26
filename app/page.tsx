import Banner from '@/components/banner/Banner';
import Main from '@/components/main/Main';

const MainContent: React.FC = () => {
  return (
    <>
      <Banner
        container={'container'}
      />
      <Main
        container={'container'}
      />
    </>
  );
};

export default MainContent;
