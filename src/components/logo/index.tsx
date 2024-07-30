import Image from 'next/image';
import Link from 'next/link';
import LogoGelateria from '../../../public/logo.png';

const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoGelateria} alt="Logo" width={100} height={100}  />
    </Link>
  );
};

export default Logo;
