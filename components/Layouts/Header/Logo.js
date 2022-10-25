import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';

const Logo = () => (
  <a className="cursor-pointer" href="/">
    <div className="flex items-center space-x-3">
      <FontAwesomeIcon icon={faFeather} className="text-xl md:text-2xl" />
      <div className="flex items-center">
        <span className="sr-only">Robin Wittkamp</span>
        <span className="font-gilroy text-xl font-black md:text-2xl">Robin Wittkamp</span>
      </div>
    </div>
  </a>
);

export default Logo;
