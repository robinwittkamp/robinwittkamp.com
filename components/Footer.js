import Link from 'next/link';

const languages = [{ name: 'Deutsch' }, { name: 'English' }];

const navigation = [
  { name: 'Imprint', href: '/imprint' },
  { name: 'Privacy policy', href: '/privacy-policy' },
];

const Footer = () => (
  <footer className="pb-8 pt-16">
    {/* Margin container */}
    <div className="mx-auto max-w-screen-xl ">
      {/* Padding container */}
      <div className="px-4 sm:px-8">
        {/* Vertical space container */}
        <div className="space-y-3">
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
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
