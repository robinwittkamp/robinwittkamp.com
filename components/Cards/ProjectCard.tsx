import Image, { StaticImageData } from 'next/image';
import type { ReactElement } from 'react';

import AngleRightIcon from '../../public/icons/fa-solid/angle-right-solid.svg';
import LinkButton from '../Buttons/LinkButton';

type ProjectCardProps = {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  image: StaticImageData;
};

const ProjectCard = ({
  title,
  description,
  buttonText,
  href,
  image,
}: ProjectCardProps): ReactElement => (
  <div className="overflow-hidden rounded-[2rem] border border-rusty-700/50 bg-gradient-to-tr from-rusty-800/50 to-rusty-700/50 shadow-xl shadow-black/30">
    {/* Image container */}
    <div className="aspect-video bg-gradient-to-tr from-rusty-700/50 to-rusty-500/50">
      <Image
        className="h-full w-full object-cover"
        src={image}
        alt={title}
        sizes="(max-width: 375px) 341px, (max-width: 640px) 574px, (max-width: 768px) 702px, (max-width: 1024px) 958px, 1278px"
      />
    </div>
    {/* Text container */}
    <div className="p-6 sm:p-8 md:p-10">
      <span className="block text-2xl font-bold text-rusty-100 sm:text-3xl lg:text-4xl">
        {title}
      </span>
      <p className="mt-6 text-lg text-rusty-400 lg:text-xl">{description}</p>
      <div className="mt-8">
        <LinkButton href={href} variant="secondary" external>
          <span className="whitespace-nowrap">{buttonText}</span>
          <AngleRightIcon className="ml-2 h-[1.125rem]" fill="currentColor" />
        </LinkButton>
      </div>
    </div>
  </div>
);

export default ProjectCard;
