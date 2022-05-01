import Link from 'next/link';

const languages = [{ name: 'Deutsch' }, { name: 'English' }];

const navigation = [
  { name: 'Imprint', href: '/imprint' },
  { name: 'Privacy policy', href: '/privacy-policy' },
];

const Footer = () => (
  <footer className="mt-16 space-y-3 pb-8">
    {/* Languages */}
    <ul className="flex justify-center">
      {languages.map((item) => (
        <li key={item.name}>
          <Link href="#">
            <a className="block py-2 px-2 text-gray-600 dark:text-neutral-300">{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    {/* Links */}
    <ul className="flex justify-center">
      {navigation.map((item) => (
        <li key={item.name}>
          <Link href={item.href}>
            <a className="block py-2 px-2 text-gray-600 dark:text-neutral-300">{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    {/* Copyright notice */}
    <span className="block py-2 px-2 text-center text-gray-500 dark:text-neutral-400">
      &copy; 2022 Robin Wittkamp
    </span>
  </footer>
);

export default Footer;
