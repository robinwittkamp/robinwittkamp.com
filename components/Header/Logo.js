import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { m, LazyMotion, domAnimation } from 'framer-motion';

const iconVariants = {
  rest: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: 'spring',
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      type: 'spring',
      duration: 0.3,
    },
  },
};

const Logo = () => (
  <LazyMotion features={domAnimation} strict>
    <Link href="/" passHref>
      <m.a
        className="cursor-pointer"
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <div className="flex items-center space-x-3">
          <m.div variants={iconVariants}>
            <FontAwesomeIcon icon={faFeather} className="text-xl md:text-2xl" />
          </m.div>
          <div className="">
            <span className="sr-only">Robin Wittkamp</span>
            <span className="font-gilroy text-xl font-extrabold md:text-2xl">Robin Wittkamp</span>
          </div>
        </div>
      </m.a>
    </Link>
  </LazyMotion>
);

export default Logo;
