import ProjectCard from '../components/Cards/ProjectCard';
import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Layouts/Section';
import CtaContactSection from '../components/Sections/CtaContactSection';

const projects = [
  {
    title: 'Robert Denier',
    href: 'https://robertdenier.de',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'Energiewerk Rügen',
    href: 'https://energiewerk-ruegen.de',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'Ferienwohnung Putbus',
    href: 'https://ferienwohnung-putbus.de',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'WebBuddy',
    href: 'https://webbuddy.robinwittkamp.com',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'Klifra',
    href: 'https://klifra.robinwittkamp.com',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'Bauraum MV',
    href: 'https://bauraum-mv.de',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
];

const Work = () => (
  <PageLayout>
    <Head title="Work - Robin Wittkamp" />
    <Section first>
      <h1 className="text-center">Latest work</h1>
      {/* Cards container */}
      <div className="mt-8 space-y-8 md:mt-16 md:space-y-16">
        {projects.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </Section>

    <CtaContactSection />
  </PageLayout>
);

export default Work;