import Link from 'next/link';
import { IconType } from 'react-icons';

type MenuItemProps = {
  title: string;
  address: string;
  Icon: IconType;
};

export default function MenuItem({ title, address, Icon }: Readonly<MenuItemProps>) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}