import Image, { StaticImageData } from 'next/image';

interface BannerProps {
  src: StaticImageData | string;
  title: string;
}

const Banner = ({ src, title }: BannerProps) => {
  return (
    <div className="relative mt-20 flex h-80 w-full items-center justify-center bg-primaryColor sm:h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <h1 className="absolute inset-0 z-10 flex flex-wrap items-center justify-center text-center text-3xl font-bold uppercase text-white text-shadow-lg sm:text-8xl">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
