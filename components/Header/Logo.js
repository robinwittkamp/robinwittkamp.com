import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/pro-solid-svg-icons';
import { motion } from 'framer-motion';

const iconVariants = {
  rest: {
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      // repeat: Infinity,
      // repeatType: 'reverse',
      // repeatDelay: 0,
      // type: 'spring',
      // bounce: '0.5',
      duration: 0.5,
    },
  },
  hover: {
    // scale: 1.05,
    // rotate: -30,
    // y: [-6, -2, 2, 6, 8],
    // x: [-3, 3, -3, 3, -3],
    // rotate: [50, 25, 50, 25, 50],
    y: [null, -6, -2, 2, 6, 8],
    x: [null, -3, 3, -3, 3, -3],
    rotate: [null, 50, 25, 50, 25, 50],
    // x: [0, -3, 0],
    // rotate: [0, 25, 0],
    // x: [0, -3, 3],
    // rotate: [0, 25, 0],
    transition: {
      type: 'spring',
      // type: 'tween',
      repeat: Infinity,
      repeatType: 'reverse',
      // repeatType: 'loop',
      // repeatType: 'mirror',
      // type: 'tween',
      // ease: 'easeInOut',
      // ease: 'linear',
      // bounce: '0.5',
      duration: 3,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: 'spring',
      // bounce: '0.5',
      duration: 0.5,
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
          <FontAwesomeIcon icon={faFeather} className="text-xl" />
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
