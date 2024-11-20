import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
    return (
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
            <div className="flex gap-4">
                <MenuItem title="home" address="/" Icon={AiFillHome} />
                <MenuItem title="favourite" address="/favourite" Icon={FiHeart} />
            </div>
            <div className="flex items-center gap-4">
                <DarkModeSwitch />
                <Link href="/" className="flex gap-1 items-center">
                    <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
                        IMDb
                    </span>
                    <span className="text-xl hidden sm:inline">Movie</span>
                </Link>
            </div>
        </div>
    );
}
