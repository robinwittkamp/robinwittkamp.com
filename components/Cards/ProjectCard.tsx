import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ReactElement } from 'react';

import LinkButton from '../Buttons/LinkButton';

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ title, description, href }: ProjectCardProps): ReactElement => (
  <div className="rounded-[2rem] border border-rusty-700 bg-gradient-to-tr from-rusty-800/50 to-rusty-700/50 px-6 py-8 shadow-xl shadow-black/40 sm:px-8 lg:p-12">
    <div className="">
      <span className="block text-2xl font-bold sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl">
        {title}
      </span>
      <p className="mt-6 text-lg text-rusty-400 lg:text-xl">{description}</p>
      <div className="mt-6">
        <LinkButton href={href} variant="secondary" external>
          <span className="whitespace-nowrap">Visit website</span>
          <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-lg" />
        </LinkButton>
      </div>
    </div>
  </div>
);

export default ProjectCard;
