import Link from 'next/link';

const Logo = () => (
  <Link href="/">
    <a className="font-gilroy text-xl font-extrabold md:text-2xl">
      <span className="sr-only">Robin Wittkamp</span>
      <span className="">Robin Wittkamp</span>
    </a>
  </Link>
);

export default Logo;
