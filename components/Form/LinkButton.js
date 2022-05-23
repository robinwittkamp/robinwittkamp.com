// import Link from 'next/link';

const LinkButton = ({ children, link }) => (
  <a
    href={link}
    className="mt-6 inline-flex items-center rounded-2xl border border-transparent bg-neutral-900 px-6 py-3 text-lg font-extrabold text-white shadow-md hover:bg-neutral-700"
  >
    {children}
  </a>
);

export default LinkButton;
