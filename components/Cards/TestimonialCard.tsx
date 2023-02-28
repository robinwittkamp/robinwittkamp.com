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
  <div className="max-w-md rounded-[2rem] border border-rusty-700/50 bg-gradient-to-tr from-rusty-800/50 to-rusty-700/50 p-6 shadow-lg shadow-black/30 sm:p-8 md:p-10 lg:p-10">
    <span className=" block text-lg font-bold text-rusty-50 md:text-xl lg:text-2xl">{name}</span>
    <span className="block text-rusty-400 lg:text-lg">{position}</span>
    <p className="mt-4 block text-lg text-rusty-300 lg:text-xl">{testimonial}</p>
  </div>
);

export default TestimonialCard;
