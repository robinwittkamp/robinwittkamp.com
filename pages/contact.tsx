import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';

const Contact = () => (
  <PageLayout>
    <Head title="Contact - Robin Wittkamp" />
    <Section first>
      <Heading variant="h1">Get in touch</Heading>
      <div className="mt-16 flex">
        <div />
      </div>
    </Section>
  </PageLayout>
);

export default Contact;
