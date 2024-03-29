import type { ReactElement } from 'react';

import Stars from '@/components/Icons/Stars';

/**
 * Types
 */
type TestimonialCardProps = {
  name: string;
  position: string;
  stars: number;
  testimonial: string;
};

/**
 * Component
 */
const TestimonialCard = ({
  name,
  position,
  stars,
  testimonial,
}: TestimonialCardProps): ReactElement => (
  <div className="flex flex-col justify-between rounded-[2rem] border border-rusty-700/50 bg-gradient-to-tr from-rusty-800/50 to-rusty-800 p-6 shadow-lg shadow-black/30 sm:p-8">
    <p className="block text-lg text-rusty-300">{testimonial}</p>
    <div className="mt-6">
      <span className="block text-lg font-bold text-rusty-100 md:text-xl">{name}</span>
      <span className="block text-rusty-400 lg:text-lg">{position}</span>
      <div className="mt-1">
        <Stars quantity={stars} />
      </div>
    </div>
  </div>
);

export default TestimonialCard;
