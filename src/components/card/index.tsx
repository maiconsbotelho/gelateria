import Image, { StaticImageData } from "next/image";

interface CardProps {
  src: StaticImageData | string;
  title: string;
  description: string;
}


const Card = ({src, title, description }: CardProps) => {
  return (
    <div className="shadow-card flex w-72 h-96 flex-col items-center justify-center gap-3 bg-white p-5">
      <Image src={src} alt="Sabor" />
      
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-base text-center">{description}</p>
     
    </div>
  );
}

export default Card;