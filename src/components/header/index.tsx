'use client';
import { useEffect, useState } from 'react';

import { CustomLink, CustomMobileLink } from '@/components/customLink';
import { motion } from 'framer-motion';
import Logo from '@/components/logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado do menu

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`bg-primaryColor fixed left-0 right-0 top-0 z-50 w-full`}
    >
      <div className="m-auto flex w-full max-w-screen-lg items-center justify-between px-5 font-medium">
        {/* Botão de menu mobile (ToggleMenu) */}
        <button
          className="flex flex-col items-center justify-center lg:hidden"
          onClick={handleToggle}
        >
          <span
            className={`bg-secondaryColor block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}`}
          ></span>
          <span
            className={`bg-secondaryColor my-0.5 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`bg-secondaryColor block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}`}
          ></span>
        </button>
       
          <Logo />
        <div className="hidden lg:flex">
          <nav className="flex gap-10 py-5 text-lg">
            <CustomLink href="/" title="Home" />
            <CustomLink href="/sabores" title="Sabores" />
            <CustomLink href="/sobre" title="Sobre" />
          </nav>
        </div>
        {/* <div className="lg:hidden"></div> */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed left-1/2 top-1/2 z-30 flex h-96 min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between gap-5 rounded-lg bg-black/90 py-10 backdrop-blur-md lg:hidden dark:bg-white/75"
          >
            <nav className="flex flex-col items-center justify-center text-2xl">
              <CustomMobileLink href="/" title="Home" toggle={handleClick} />
              <CustomMobileLink
                href="/sabores"
                title="Sabores"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/sobre"
                title="Sobre"
                toggle={handleClick}
              />
            </nav>
          </motion.div>
        ) : null}
      </div>
    </header>
  );
};



export default Header;