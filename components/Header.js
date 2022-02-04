import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <header className="firefox:bg-opacity-90 border-neutral-800 dark:bg-neutral-900/70 fixed top-0 h-14 w-full border-b bg-white/30 px-4 backdrop-blur sm:px-8 md:h-20 md:px-12 lg:h-24 lg:px-24 xl:h-24 xl:px-32">
    <div className="flex h-full items-center justify-between">
      <Link href="/">
        <a className="text-xl font-black leading-[0.85] md:text-2xl md:leading-[0.85]">
          <span className="">
            robin
            <br />
            wittkamp
          </span>
        </a>
      </Link>

      <Nav />
    </div>
  </header>
);

export default Header;
