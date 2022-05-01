import Link from 'next/link';

const Logo = () => (
  <Link href="/">
    <a className="text-xl font-bold md:text-2xl">
      <span className="sr-only">Robin Wittkamp</span>
      <span className="">Robin Wittkamp</span>
    </a>
  </Link>
);

export default Logo;
