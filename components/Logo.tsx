// import { faFeather } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import type { ReactElement } from 'react';

import RobinWittkampLogo from '../public/images/logos/robin_wittkamp_logo.svg';

const Logo = (): ReactElement => (
  <Link className="cursor-pointer" href="/">
    <div className="flex items-center space-x-3">
      {/* <FontAwesomeIcon icon={faFeather} className="text-xl md:text-2xl" /> */}
      <RobinWittkampLogo className="h-6 md:h-7" />
      <div className="flex items-center">
        <span className="sr-only">Robin Wittkamp</span>
        <span className="whitespace-nowrap font-gilroy text-xl font-black md:text-2xl">
          Robin Wittkamp
        </span>
      </div>
    </div>
  </Link>
);

export default Logo;
