import Link from 'next/link';
import { Menu } from '@headlessui/react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const Nav = () => (
  <Menu as="div" className="h-full">
    <Menu.Button className="h-full w-12">X</Menu.Button>

    <Menu.Items as="ul" className="absolute left-0 right-0 w-full bg-white dark:bg-true-gray-900">
      {navigation.map((item) => (
        <Menu.Item as="li" key={item.name}>
          <Link href={item.href}>
            <a className="block px-4 py-3 text-lg font-extrabold lg:h-full lg:px-6 lg:text-xl">
              {item.name}
            </a>
          </Link>
        </Menu.Item>
      ))}

      {/* <Menu.Item as="li">
        {({ active }) => (
          <a className={`${active && 'bg-blue-500'}`} href="#home">
            Home
          </a>
        )}
      </Menu.Item>

      <Menu.Item as="li">
        {({ active }) => (
          <a className={`${active && 'bg-blue-500'}`} href="#about">
            About
          </a>
        )}
      </Menu.Item>

      <Menu.Item as="li">
        {({ active }) => (
          <a className={`${active && 'bg-blue-500'}`} href="#work">
            Work
          </a>
        )}
      </Menu.Item>

      <Menu.Item as="li">
        {({ active }) => (
          <a className={`${active && 'bg-blue-500'}`} href="#contact">
            Contact
          </a>
        )}
      </Menu.Item> */}
    </Menu.Items>
  </Menu>
  // <nav className="">
  //   <a className="" />

  //   <ul className="hidden md:flex">
  //     {navigation.map((item) => (
  //       <li key={item.name}>
  //         <Link href={item.href}>
  //           <a className="block h-full px-6 text-xl font-extrabold">{item.name}</a>
  //         </Link>
  //       </li>
  //     ))}
  //   </ul>
  // </nav>
);

export default Nav;
