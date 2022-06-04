import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/pro-solid-svg-icons';
import { motion } from 'framer-motion';

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
  <Link href="/">
    <motion.a
      className="group cursor-pointer"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="flex items-center space-x-3">
        <motion.div variants={iconVariants}>
          <FontAwesomeIcon icon={faFeather} className="mt-0.5 text-2xl" />
        </motion.div>
        <div className="">
          <span className="sr-only">Robin Wittkamp</span>
          <span className="font-gilroy text-xl font-extrabold md:text-2xl">Robin Wittkamp</span>
        </div>
      </div>
    </motion.a>
  </Link>
);

export default Logo;
