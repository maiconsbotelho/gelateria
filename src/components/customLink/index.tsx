'use client';
import { LinkProps } from '@/interfaces/linkProps';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const CustomLink = ({ href, title, className = '' }: LinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} group relative pb-1 transition-all duration-300`}
    >
      {title}
      <span
        className={`absolute bottom-0.5 left-0 inline-block h-[3px] bg-secondaryColor transition-[width] duration-300 ease-linear group-hover:w-full ${pathname === href ? 'w-full' : 'w-0'} `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  className = '',
  toggle,
}: LinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    toggle?.();
    router.push(href);
  };

  return (
    <button
      className={`${className} group relative my-2 pb-1 text-white transition-all duration-300 dark:text-black`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`bg-primaryColor absolute bottom-0.5 left-0 inline-block h-[3px] transition-[width] duration-300 ease-linear group-hover:w-full ${pathname === href ? 'w-full' : 'w-0'} `}
      >
        &nbsp;
      </span>
    </button>
  );
};

export { CustomLink, CustomMobileLink };
