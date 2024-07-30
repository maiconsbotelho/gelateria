import Banner from '@/components/banner';
import Content from '@/components/content';
import HomeBanner from '../../public/banner-home.png';
import FlavorsBanner from '../../public/banner-sabores.jpg';

export default function Home() {
  return (
    <main className="h-full w-full bg-blue-400">
      <Banner src={HomeBanner} title="Sorvete Artesanal" />

      <Content
        src={FlavorsBanner}
        title="Nossos Sabores"
        subtitle="Novos e deliciosos!"
        description="Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de 
frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!"
      />

      <section className="w-full bg-orange-400">
        <h1>Ola</h1>
      </section>
    </main>
  );
}
