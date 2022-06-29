import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import LinkButton from '../Form/LinkButton';

const ProjectCard = ({ title, description, href }) => (
  <div className="rounded-[2rem] border border-neutral-200 bg-white px-6 py-8 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-lg dark:shadow-black sm:px-8 lg:p-12">
    <div className="">
      <span className="block text-2xl font-bold sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl">
        {title}
      </span>
      <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 lg:text-xl">
        {description}
      </p>
      <div className="mt-6">
        <LinkButton href={href} variant="secondary" external>
          <span>Visit website</span>
          <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-lg" />
        </LinkButton>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ProjectCard;
