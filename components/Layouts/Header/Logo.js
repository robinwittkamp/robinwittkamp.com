import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

const Logo = () => (
  <Link href="/" passHref>
    <a className="cursor-pointer">
      <div className="flex items-center space-x-3">
        <FontAwesomeIcon icon={faFeather} className="text-xl md:text-2xl" />
        <div className="flex items-center">
          <span className="sr-only">Robin Wittkamp</span>
          <span className="font-gilroy text-xl font-black md:text-2xl">Robin Wittkamp</span>
        </div>
      </div>
    </a>
  </Link>
);

export default Logo;
