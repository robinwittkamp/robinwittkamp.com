import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <header className="sticky flex h-12 items-center justify-between md:h-20 lg:h-24 xl:h-24">
    <Link href="/">
      <a className="text-xl font-extrabold leading-[0.8] leading-[0.8] md:text-2xl md:leading-[0.8]">
        <span className="">
          robin
          <br />
          wittkamp
        </span>
      </a>
    </Link>

    <Nav />
  </header>
);

export default Header;
