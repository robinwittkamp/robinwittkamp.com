import PropTypes from 'prop-types';
import LinkButton from '../Form/LinkButton';
import Section from './Section';

const ErrorLayout = ({ headingText, bodyText }) => (
  <Section classes="h-screen max-h-[56rem]" first>
    <h1 className="max-w-screen-lg sm:mx-auto sm:text-center">{headingText}</h1>
    <p className="mt-8 max-w-2xl text-xl text-neutral-500 dark:text-neutral-400 sm:mx-auto sm:text-center">
      {bodyText}
    </p>
    <div className="mt-8 sm:flex sm:justify-center">
      <LinkButton link="/" variant="secondary">
        Home
      </LinkButton>
    </div>
  </Section>
);

ErrorLayout.propTypes = {
  headingText: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};

export default ErrorLayout;
