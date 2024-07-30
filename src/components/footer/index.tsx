import Container from '@/components/container';
import Logo from '@/components/logo';

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <Container className="flex flex-col items-center justify-between py-10 text-white sm:flex-row sm:py-24">
        <Logo />
        <div className="h-24 text-center sm:w-1/5 sm:text-start">
          <h3 className="text-lg">Endereço</h3>
          <p className="text-base">Bernardino de Campos, 98</p>
          <p className="text-base">São Paulo, SP 12345-678</p>
        </div>
        <div className="h-24 text-center sm:w-1/5 sm:text-start">
          <h3 className="text-lg">Contato</h3>
          <p className="text-base">info@meusite.com</p>
          <p className="text-base">Tel: (11) 3456-7890</p>
        </div>
        <div className="h-24 text-center sm:w-1/5 sm:text-start">
          <h3 className="text-lg">Horários</h3>
          <p className="text-base">ABERTO TODOS OS DIAS</p>
          <p className="text-base">10:00 - 22:00</p>
        </div>
      </Container>
      <p className="w-full py-5 text-center text-white">
        © 2024 Gelateria. Todos os direitos reservados. Desenvolvido por Maicon
        Botelho
      </p>
    </footer>
  );
};

export default Footer;
