import Link from 'next/link';

const languages = [{ name: 'Deutsch' }, { name: 'English' }];

const navigation = [
  { name: 'Imprint', href: '/imprint' },
  { name: 'Privacy policy', href: '/privacy-policy' },
];

const Footer = () => (
  <footer className="pb-8 pt-16 md:pb-16">
    {/* Padding container */}
    <div className="px-4 sm:px-8">
      {/* Margin container */}
      <div className="mx-auto max-w-screen-xl ">
        {/* 3 columns container */}
        <div className="space-y-3 md:flex md:flex-row-reverse md:justify-between md:space-y-0">
          {/* Top/Right container */}
          <div className="md:flex md:flex-1 md:justify-end">
            {/* Languages */}
            <ul className="flex justify-center">
              {languages.map((item) => (
                <li key={item.name}>
                  <Link href="#">
                    <a className="block py-2 px-2 text-gray-600 dark:text-neutral-300">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle container */}
          <div className="md:flex md:flex-1 md:justify-center">
            {/* Links */}
            <ul className="flex justify-center">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="block py-2 px-2 text-gray-600 dark:text-neutral-300">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom/left container */}
          <div className="md:flex md:flex-1 md:justify-start">
            {/* Copyright notice */}
            <span className="block py-2 px-2 text-center text-gray-500 dark:text-neutral-400">
              &copy; 2022 Robin Wittkamp
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
