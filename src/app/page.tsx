import Banner from '@/components/banner';
import Content from '@/components/content';
import EventImage from '../../public/EventImage.png';
import FlavorsBanner from '../../public/Flavors2Image.png';
import HeroBanner from '../../public/HeroBanner.png';
import AboutImage from '../../public/AboutImage.png';

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Banner src={HeroBanner} title="Sorvete Artesanal" />

      <Content
        src={FlavorsBanner}
        title="Nossos Sabores"
        subtitle="Novos e deliciosos!"
        description="Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos 
        produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e 
        sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!"
      />
      <div className="hidden lg:inline-block">
        <Content
          src={EventImage}
          reverseOrder={true}
          layout="text-first"
          title="NOSSOS EVENTOS"
          subtitle="Delicias com sorvete!"
          description="Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender 
        e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo 
        aqui com a gente."
        />
      </div>
      <div className=" lg:hidden">
        <Content
          src={EventImage}
          reverseOrder={false}
          title="NOSSOS EVENTOS"
          subtitle="Delicias com sorvete!"
          description="Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender 
        e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo 
        aqui com a gente."
        />
      </div>

      <Content
        src={AboutImage}
        title="SOBRE NÓS"
        subtitle="Alegria em cada casquinha!"
        description="Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado 
        produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos 
        fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade."
      />
    </main>
  );
}
