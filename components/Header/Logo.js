import Link from 'next/link';

const Logo = () => (
  <Link href="/">
    <a href="#" className="text-xl font-black leading-[0.85] md:text-2xl md:leading-[0.85]">
      <span className="sr-only">Robin Wittkamp</span>
      <span className="">
        robin
        <br />
        wittkamp
      </span>
    </a>
  </Link>
);

export default Logo;
