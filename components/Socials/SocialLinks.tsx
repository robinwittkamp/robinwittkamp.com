import type { ReactElement } from 'react';

import GithubIcon from '../../public/icons/fa-brands/github.svg';
import LinkedinIcon from '../../public/icons/fa-brands/linkedin.svg';
import TwitterIcon from '../../public/icons/fa-brands/twitter.svg';
import XingIcon from '../../public/icons/fa-brands/xing.svg';

type SocialLinksProps = {
  footer?: boolean;
};

const SocialLinks = ({ footer }: SocialLinksProps): ReactElement => {
  return (
    <div className="flex flex-wrap items-center space-x-8">
      {/* GitHub */}
      <a
        className={`${
          footer ? 'text-rusty-400' : 'text-rusty-300'
        } transition-colors hover:text-white`}
        href="https://github.com/robinwittkamp"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon className={footer ? 'h-6' : 'h-7'} fill="currentColor" />
        <span className="sr-only">GitHub</span>
      </a>
      {/* LinkedIn */}
      <a
        className={`${
          footer ? 'text-rusty-400' : 'text-rusty-300'
        } transition-colors hover:text-white`}
        href="https://www.linkedin.com/in/robinwittkamp"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedinIcon className={footer ? 'h-6' : 'h-7'} fill="currentColor" />
        <span className="sr-only">LinkedIn</span>
      </a>
      {/* Xing */}
      <a
        className={`${
          footer ? 'text-rusty-400' : 'text-rusty-300'
        } transition-colors hover:text-white`}
        href="https://www.xing.com/profile/Robin_Wittkamp2"
        rel="noopener noreferrer"
        target="_blank"
      >
        <XingIcon className={footer ? 'h-6' : 'h-7'} fill="currentColor" />
        <span className="sr-only">Xing</span>
      </a>
      {/* Twitter */}
      <a
        className={`${
          footer ? 'text-rusty-400' : 'text-rusty-300'
        } transition-colors hover:text-white`}
        href="https://twitter.com/robinwittkamp"
        rel="noopener noreferrer"
        target="_blank"
      >
        <TwitterIcon className={footer ? 'h-6' : 'h-7'} fill="currentColor" />
        <span className="sr-only">Twitter</span>
      </a>
    </div>
  );
};

export default SocialLinks;
