import AboutSection from '@/components/aboutSection';
import Container from '@/components/container';
import Content from '@/components/content';
import Banner from '@/components/banner';
import BannerSobre from '../../../public/SubBanner.png';
import Sorveteria from '../../../public/AboutImage.png';
import SobreImage from '../../../public/Flavors2Image.png';

const Sabores = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Banner src={BannerSobre} title="A Gelateria" />
      <Container>
        <AboutSection />
      </Container>
      <Content src={SobreImage} src2={Sorveteria} layout="image-image" />
    </main>
  );
};

export default Sabores;
