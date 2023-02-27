import type { ReactElement } from 'react';

/**
 * Types
 */
type ExperienceCardProps = {
  title: string;
  description: string;
};

/**
 * Component
 */
const ExperienceCard = ({ title, description }: ExperienceCardProps): ReactElement => (
  <div className="rounded-2xl border border-rusty-700/50 bg-gradient-to-tr from-rusty-800/50 to-rusty-700/50 p-8 md:p-12 lg:p-16">
    <span className="block text-center text-4xl font-bold md:text-5xl xl:text-6xl">{title}</span>
    <span className="block text-center text-rusty-300">{description}</span>
  </div>
);

export default ExperienceCard;
