import Link from 'next/link';

const languages = [{ name: 'Deutsch' }, { name: 'English' }];

const navigation = [
  { name: 'Imprint', href: '/imprint' },
  { name: 'Privacy policy', href: '/privacy-policy' },
];

const Footer = () => (
  <footer className="mt-16 space-y-3 pb-8">
    <ul className="flex justify-center">
      {languages.map((item) => (
        <li key={item.name}>
          <Link href="#">
            <a className="block py-2 px-2 text-gray-600 dark:text-true-gray-300">{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <ul className="flex justify-center">
      {navigation.map((item) => (
        <li key={item.name}>
          <Link href={item.href}>
            <a className="block py-2 px-2 text-gray-600 dark:text-true-gray-300">{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <span className="block py-2 px-2 text-center text-gray-500 dark:text-true-gray-400">
      © 2022 robin wittkamp
    </span>
  </footer>
);

export default Footer;
