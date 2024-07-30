import Image, { StaticImageData } from 'next/image';

interface ContentProps {
  src: StaticImageData | string;
  src2?: StaticImageData | string; // Adiciona uma segunda imagem opcional
  title?: string;
  subtitle?: string;
  description?: string;
  reverseOrder?: boolean; // Adiciona uma prop para inverter a ordem dos elementos
  layout?: 'image-first' | 'text-first' | 'image-image'; // Define os layouts possíveis
}

const Content = ({
  src,
  src2 = '',
  title,
  subtitle,
  description,
  reverseOrder = false,
  layout = 'image-first',
}: ContentProps) => {
  const isImageImage = layout === 'image-image';

  return (
    <article className={`flex w-full flex-col bg-white sm:flex-row`}>
      {isImageImage ? (
        <>
          <div className="relative h-full sm:w-1/2">
            <Image
              src={src}
              alt="Image 1"
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div className="relative h-full sm:w-1/2">
            <Image
              src={src2}
              alt="Image 2"
              objectFit="cover"
              layout="responsive"
            />
          </div>
        </>
      ) : (
        <>
          <div
            className={`h-auto sm:w-1/2 ${reverseOrder ? 'order-last' : ''}`}
          >
            <Image
              src={src}
              alt="Image"
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-2 sm:gap-5 px-12 py-10 sm:py-24 sm:w-1/2 ${reverseOrder ? 'order-first' : ''}`}
          >
            {title && (
              <h1 className="text-center text-2xl sm:text-4xl font-bold uppercase">
                {title}
              </h1>
            )}
            {subtitle && (
              <h2 className="text-center text-xl font-bold">{subtitle}</h2>
            )}
            {description && (
              <p className="text-center text-base">{description}</p>
            )}
          </div>
        </>
      )}
    </article>
  );
};

export default Content;
