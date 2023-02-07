import Image, { StaticImageData } from 'next/image';
import type { ReactElement } from 'react';

import AngleRightIcon from '../../public/icons/fa-solid/angle-right-solid.svg';
import Button from '../Buttons/Button';

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
        className="object-cover"
        src={image}
        alt={title}
        sizes="(max-width: 375px) 341px, (max-width: 640px) 574px, (max-width: 768px) 702px, (max-width: 1024px) 462px, 614px"
      />
    </div>
    {/* Text container */}
    <div className="p-6 sm:p-8">
      <span className="block text-2xl font-bold text-rusty-100 sm:text-3xl">{title}</span>
      <p className="mt-4 text-lg text-rusty-400 md:mt-6 lg:text-xl">{description}</p>
      {buttonText && (
        <div className="mt-6 md:mt-8">
          <Button href={href} variant="secondary">
            <span className="whitespace-nowrap">{buttonText}</span>
            <AngleRightIcon className="ml-2 h-[1.125rem]" fill="currentColor" />
          </Button>
        </div>
      )}
    </div>
  </div>
);

export default ProjectCard;
