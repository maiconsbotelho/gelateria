import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-screen-lg bg-green-400 px-5">{children}</div>;
};

export default Container;
