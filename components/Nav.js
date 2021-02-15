import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="#home">Home</Link>
      </li>
      <li>
        <Link href="#portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
