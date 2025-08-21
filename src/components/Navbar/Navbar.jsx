'use client';
import Link from 'next/link';
import { Turn as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';
import UserDropDown from '../userDropdown/userDropDown';
import Image from 'next/image';
import ActiveLinks from '../Shared/ActiveLinks';
import { usePathname } from 'next/navigation';
import Container from '../Shared/Container';
const Navbar = ({ token, user }) => {
  const [isOpen, setOpen] = useState(false);
  console.log('This is user from navbar', user);
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');
  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Courses',
      href: '/courses',
    },

    // Show Dashboard and Logout when authenticated

    !user && { name: 'Login', href: '/login' }, // Show Register when not authenticated
  ].filter(Boolean);

  const scrollHandler = () => {
    if (window.scrollY > 1) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.addEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          header ? ' w-full backdrop-blur-2xl bg-gray-600 border-b ' : ''
        } ${
          isDashboard && 'hidden '
        } transition-all duration-300 z-[999] block w-full py-1 mx-auto text-white fixed top-0  `}
      >
        <Container>
          <div className=" flex flex-wrap items-center justify-between  ">
            <Link
              href="/"
              className="flex items-center text-4xl gap-x-2 cursor-pointer py-1.5   font-semibold"
            >
              <Image
                className="w-10 h-10"
                src="/logo.png"
                width={60}
                height={60}
                alt="logo"
              />
              <span className="text-xl md:text-2xl lg:text-3xl font-medium">
                Programming
              </span>
            </Link>
            <div className="">
              <div className="flex justify-center items-center gap-x-7">
                <ul className=" hidden  lg:flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  {links.map((link, i) => (
                    <li
                      key={i}
                      className="flex items-center p-1 text-lg gap-x-2 text-white  transition-all duration-200 hover:text-pink-700"
                    >
                      <ActiveLinks path={link.href}>{link.name}</ActiveLinks>
                    </li>
                  ))}
                </ul>
                <div className="hidden lg:block">
                  {user && <UserDropDown user={user} />}
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setOpen(!isOpen)}
                  className="relative  select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                  type="button"
                >
                  <Hamburger color="pink" size={30} />
                  {/* <UserDropDown /> */}

                  <div
                    className={`${
                      isOpen
                        ? ''
                        : 'translate-x-full opacity-0 transition-all duration-200'
                    } absolute right-0 min-w-40 bg-slate-800 transition-all duration-200 rounded-md`}
                  >
                    <ul>
                      <li className="text-lg text-left px-4 py-3">
                        <ActiveLinks path={'/'}>Home</ActiveLinks>
                      </li>
                      <li className="text-lg text-left px-4 pb-3">
                        <ActiveLinks path={'/courses'}>Courses</ActiveLinks>
                      </li>
                    </ul>
                  </div>
                </button>
                <div className="lg:hidden">
                  {user && <UserDropDown user={user} />}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};
export default Navbar;
