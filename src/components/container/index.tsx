import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-screen-lg px-5 py-12 sm:py-28 ${className || ''}`}>
      {children}
    </div>
  );
};

export default Container;
