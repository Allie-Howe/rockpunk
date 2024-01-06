import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="container text-gray-200 mx-auto px-40 pt-7">
        {children}
    </div>
  );
}
