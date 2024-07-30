import Card from '@/components/card';
import Cookies from '../../../public/sabor-cookies-avela.png';
import Oreo from '../../../public/sabor-oreo.png';
import Pistache from '../../../public/sabor-pistache.png';
import Kiwi from '../../../public/sorbet-kiwi.png';
import Limao from '../../../public/sorbet-limao.png';
import Morango from '../../../public/sorbet-morango.png';

const FlavorsSection = () => {
  return (
    <div className='flex flex-col gap-10'>
      <h1 className="text-center text-xl font-bold uppercase sm:text-3xl">
        Sabores de Sorvete
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <Card
          src={Oreo}
          title="Sorvete de Oreo"
          description="Delicioso sorvete sabor Oreo. Uma explosão de sabor."
        />
        <Card
          src={Pistache}
          title="Sorvete Pistache"
          description="Cremoso sorvete sabor pistache com pedacinhos de semente."
        />
        <Card
          src={Cookies}
          title="Sorvete Cookies & Avelã"
          description="O nosso melhor sorvete. Você vai adorar o sabor."
        />
        <Card
          src={Kiwi}
          title="Sorvete de Kiwi"
          description="Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C."
        />
        <Card
          src={Morango}
          title="Sorvete de Morango"
          description="Sorvete de morango gourmet. Tradicional e saboroso."
        />
        <Card
          src={Limao}
          title="Sorvete de Limão Siciliano"
          description="O incrivel sorvete gourmet de limão siciliano vai te encantar."
        />
      </div>
    </div>
  );
};

export default FlavorsSection;
