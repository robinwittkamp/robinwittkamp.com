import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const Nav = () => (
  <nav className="">
    <a className="" />

    <ul className="hidden md:flex">
      {navigation.map((item) => (
        <li key={item.name}>
          <Link href={item.href}>
            <a className="block h-full px-6 text-xl font-extrabold">{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
