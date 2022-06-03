import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/pro-solid-svg-icons';

const Logo = () => (
  <Link href="/">
    <a className="group">
      <div className="flex items-center space-x-3">
        <FontAwesomeIcon
          icon={faFeather}
          className="text-xl transition duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-500"
        />
        <div className="">
          <span className="sr-only">Robin Wittkamp</span>
          <span className="font-gilroy text-xl font-extrabold md:text-2xl">Robin Wittkamp</span>
        </div>
      </div>
    </a>
  </Link>
);

export default Logo;
