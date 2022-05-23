// import Link from 'next/link';

const LinkButton = ({ children, link }) => (
  <a
    href={link}
    className="mt-6 inline-flex items-center rounded-2xl border border-transparent bg-neutral-800 px-6 py-3 text-lg font-extrabold text-white shadow-lg shadow-blue-500/75 transition duration-300 hover:bg-neutral-900 hover:shadow-md hover:shadow-blue-500/75 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
  >
    {children}
  </a>
);

export default LinkButton;
