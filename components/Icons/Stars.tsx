import type { ReactElement } from 'react';

import StarIcon from '@/public/icons/fa-solid/star-solid.svg';

/**
 * Types
 */
type StarProps = {
  quantity: number;
};

/**
 * Component
 */
const Stars = ({ quantity }: StarProps): ReactElement => {
  const starElements = [];
  for (let i = 0; i < quantity; i += 1) {
    starElements.push(<StarIcon key={i} className="h-4 w-4 text-orange-500" fill="currentColor" />);
  }

  return <div className="flex space-x-0.5">{starElements}</div>;
};

export default Stars;
