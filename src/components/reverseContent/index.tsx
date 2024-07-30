import Image, { StaticImageData } from 'next/image';

interface ContentProps {
  src: StaticImageData | string;
  title: string;
  subtitle: string;
  description: string;
}

const ReverseContent = ({ src, title, subtitle, description }: ContentProps) => {
  return (
    <article className="flex w-full bg-white">
      <div className="flex w-1/2 flex-col items-center justify-center gap-5 px-12 py-24">
        <h1 className="text-4xl font-bold uppercase">{title}</h1>
        <h2 className="text-xl font-bold">{subtitle}</h2>
        <p className="text-base">{description}</p>
      </div>
      <div className="h-auto w-1/2">
        <Image src={src} alt="Banner" objectFit="cover" layout="responsive" />
      </div>
    </article>
  );
};

export default ReverseContent;
