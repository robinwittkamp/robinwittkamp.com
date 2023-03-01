import type { ReactElement } from 'react';

/**
 * Types
 */
type TestimonialCardCardProps = {
  name: string;
  position: string;
  testimonial: string;
};

/**
 * Component
 */
const TestimonialCard = ({
  name,
  position,
  testimonial,
}: TestimonialCardCardProps): ReactElement => (
  <div className="rounded-[2rem] border border-rusty-700/50 bg-gradient-to-tr from-rusty-800/50 to-rusty-800 p-6 shadow-lg shadow-black/30 sm:p-8">
    <p className="block text-lg text-rusty-300">{testimonial}</p>
    <span className="mt-6 block text-lg font-bold text-rusty-100 md:text-xl">{name}</span>
    <span className="block text-rusty-400 lg:text-lg">{position}</span>
  </div>
);

export default TestimonialCard;
