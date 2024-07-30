import Container from '@/components/container';
import FlavorsSection from '@/components/flavorsSection';
import Banner from '@/components/banner';
import FlavorsBanner from '../../../public/AboutBanner.png';

const Sabores = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Banner src={FlavorsBanner} title="Sorvete Artesanal" />
      <Container>
        <FlavorsSection />
      </Container>
    </main>
  );
};

export default Sabores;
