import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'next/image';
import type { ReactElement } from 'react';

// import KlifraPadMockup from '../../public/images/klifra_mockup_pad.png';
import LinkButton from '../Buttons/LinkButton';

type ProjectCardProps = {
  title: string;
  description: string;
  buttonText: string;
  href: string;
};

const ProjectCard = ({ title, description, buttonText, href }: ProjectCardProps): ReactElement => (
  <div className="overflow-hidden rounded-[2rem] border border-rusty-700/50 bg-gradient-to-tr from-rusty-800/50 to-rusty-700/50 shadow-xl shadow-black/30">
    {/* Image container */}
    <div className="">
      <div className="aspect-video bg-gradient-to-tr from-rusty-700/50 to-rusty-500/50" />
      {/* <Image
        className="h-full w-full rounded-[2rem] object-cover"
        src={KlifraPadMockup}
        alt="Website"
        width={1280}
        sizes="(max-width: 375px) 343px, (max-width: 640px) 576px, (max-width: 768px) 704px, (max-width: 1024px) 960px, 1280px"
      /> */}
    </div>
    {/* Text container */}
    <div className="px-6 py-8 sm:px-8 lg:p-12">
      <span className="block text-2xl font-bold text-rusty-100 sm:text-3xl lg:text-4xl">
        {title}
      </span>
      <p className="mt-6 text-lg text-rusty-400 lg:text-xl">{description}</p>
      <div className="mt-8">
        <LinkButton href={href} variant="secondary" external>
          <span className="whitespace-nowrap">{buttonText}</span>
          <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-lg" />
        </LinkButton>
      </div>
    </div>
  </div>
);

export default ProjectCard;
