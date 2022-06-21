import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import LinkButton from '../Form/LinkButton';

const ProjectCard = ({ heading, link, text }) => (
  <div className="rounded-[2rem] border border-neutral-100 bg-white p-8 shadow-xl dark:border-neutral-700 dark:bg-neutral-800 md:p-12">
    <div className="">
      <h4 className="">{heading}</h4>
      <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400">{text}</p>
      <div className="mt-6">
        <LinkButton link={link} variant="tertiary">
          <span>Visit website</span>
          <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-xl" />
        </LinkButton>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  heading: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectCard;