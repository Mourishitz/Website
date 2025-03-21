import { ThemeSelector } from "@/app/components/theme-selector";
import Link from "next/link";

export const Navbar: React.FC = () => {

    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-base-content">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base-content">
                    <Link href="/">
                        <li><p>Homepage</p></li>
                    </Link>
                    <Link href="/projects">
                        <li><p>Projects</p></li>
                    </Link>
                    <Link href="/about">
                        <li><p>About</p></li>
                    </Link>
                </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex text-base-content">
                <ul className="menu menu-horizontal px-1">
                    <Link href="/">
                        <li><p>Homepage</p></li>
                    </Link>
                    <Link href="/projects">
                        <li><p>Projects</p></li>
                    </Link>
                    <Link href="/about">
                        <li><p>About</p></li>
                    </Link>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden sm:block">
                    <ThemeSelector  />
                </div>
            </div>
        </div>
    );
};
