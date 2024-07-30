import Image, { StaticImageData } from 'next/image';

interface BannerProps {
  src: StaticImageData | string;
  title: string;
}

const Banner = ({ src, title }: BannerProps) => {
  return (
    <div className="flex bg-primaryColor h-screen w-full items-center justify-center">
      <div>
        <Image src={src} alt="Banner" objectFit="cover" className="z-0" />
      </div>
      <h1 className="absolute inset-0 z-10 flex items-center justify-center text-8xl text-shadow-lg uppercase font-bold text-white">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
