import Image, { StaticImageData } from 'next/image';

interface BannerProps {
  src: StaticImageData | string;
  title: string;
}

const SubBanner = ({ src, title }: BannerProps) => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black">
      <div className="absolute inset-0">
        <Image
          src={src}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <h1 className="absolute inset-0 z-10 flex items-center justify-center text-center flex-wrap text-5xl sm:text-8xl font-bold uppercase text-white text-shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default SubBanner;
