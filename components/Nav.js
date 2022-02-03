import Link from 'next/link';

const Nav = () => (
  <nav className="">
    <ul className="flex">
      <li>
        <Link href="#home">
          <a className="px-6 text-xl font-extrabold">Home</a>
        </Link>
      </li>
      <li>
        <Link href="#portfolio">
          <a className="px-6 text-xl font-extrabold">Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <a className="px-6 text-xl font-extrabold">Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
