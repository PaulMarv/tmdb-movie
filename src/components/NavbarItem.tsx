'use client';

import Loading from '@/app/loading';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

type NavbarItemProps = {
  title: string;
  param: string;
};

function NavbarItemContent({ title, param }: Readonly<NavbarItemProps>) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${genre === param
          ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
          : ''
          }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}


export default function NavbarItem({ title, param }: Readonly<NavbarItemProps>) {
  return (
    <Suspense fallback={<Loading />}>
      <NavbarItemContent title={title} param={param} />
    </Suspense>
  );
}
