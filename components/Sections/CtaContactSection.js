import LinkButton from '../Form/LinkButton';
import Section from '../Layouts/Section';

const CtaContactSection = () => (
  <Section classes="bg-neutral-50 dark:bg-neutral-800">
    {/* <div className="rounded-[2rem] bg-neutral-50 p-16 dark:bg-neutral-900"> */}
    <h2 className="sm:text-center">Let&apos;s work together</h2>
    <p className="mt-8 max-w-lg text-xl text-neutral-500 dark:text-neutral-400 sm:mx-auto sm:text-center">
      If you are interested in building a project together or if you have any questions, feel free
      to contact me.
    </p>
    <div className="mt-8 sm:flex sm:justify-center">
      <LinkButton href="/contact" variant="primary">
        Get in touch
      </LinkButton>
    </div>
    {/* </div> */}
  </Section>
);

export default CtaContactSection;
