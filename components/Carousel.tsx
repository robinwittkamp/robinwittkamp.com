import {
  // AnimatePresence,
  LazyMotion,
  // m,
  // useMotionTemplate,
  // useMotionValue
} from 'framer-motion';
import type { ReactElement, ReactNode } from 'react';

/**
 * Dynamic imports
 */
const loadFramerMotionFeatures = () =>
  import('@/lib/framer-motion/framerMotionFeatures').then((res) => res.default);

/**
 * Types
 */
type CarouselProps = {
  children: ReactNode | ReactNode[];
};

/**
 * Component
 */
const Carousel = ({ children }: CarouselProps): ReactElement => {
  return (
    <LazyMotion features={loadFramerMotionFeatures} strict>
      <div className="">{children}</div>
    </LazyMotion>
  );
};

export default Carousel;
