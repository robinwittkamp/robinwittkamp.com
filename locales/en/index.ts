import BauraumDesktop from '../../public/images/bauraum-mv_desktop.png';
import EnergiewerkDesktop from '../../public/images/energiewerk-ruegen_desktop.png';
import FewoPutbusDesktop from '../../public/images/ferienwohnung-putbus_desktop.png';
import KlifraDesktop from '../../public/images/klifra_desktop.png';
import RobertDenierDesktop from '../../public/images/robertdenier_desktop.png';
import WebbuddyDesktop from '../../public/images/webbuddy_desktop.png';

export default {
  title: 'Robin Wittkamp - Web developer, UI/UX designer and freelancer',
  description:
    "Hi, I'm Robin. I develop performant websites and web applications with focus on design and user experience.",
  heroSection: {
    tagline: "Hi there 👋🏻, I'm Robin.",
    headingOne: 'Developer',
    headingTwo: ' and designer passionate about tech',
    subheading:
      "I've designed and developed websites and web apps for over four years as a freelancer. I studied visual computing and design at the Hamm-Lippstadt University of Applied Sciences.",
    button: 'View projects',
    logosDescription: 'Trusted by businesses like',
  },
  aboutSection: {
    heading: 'About me',
    paragraphOne:
      'My interest in designing and implementing user interfaces started 6 years ago. As a result I began my studies at the University of Applied Sciences Hamm-Lippstadt in the field of computer visualization and design. During my studies I worked as a student assistant in various web and design projects. This included e.g. the frontend development of an ERP software for a medium-sized company.',
    paragraphTwo:
      'In 2018, I additionally registered a business alongside my studies. Since then, I have been building websites and web applications for companies from Germany as a freelancer. For the implementation of projects I use both proven technologies like WordPress and more modern technologies like React.js or Next.js. My tasks also include the design of user interfaces as well as the administration of servers, domains and web hosting in general.',
    skills: {
      heading: 'Skills',
      items: [
        {
          heading: 'Languages',
          paragraph: 'HTML, CSS, SCSS, JavaScript, TypeScript, PHP, Python, Java',
        },
        {
          heading: 'Frontend',
          paragraph: 'React.js, Next.js, TailwindCSS, Framer Motion, Three.js',
        },
        {
          heading: 'Backend',
          paragraph: 'Node.js, Express.js, MySQL, Rest API',
        },
        {
          heading: 'Content Management System',
          paragraph: 'WordPress, Strapi, Sanity',
        },
        {
          heading: 'Hosting & Deployment',
          paragraph: 'Plesk, Vercel',
        },
        {
          heading: 'Development tools',
          paragraph: 'Git, npm, Visual Studio Code, ESLint, Prettier',
        },
        {
          heading: 'Design tools',
          paragraph: 'Figma, Photoshop, Illustrator',
        },
      ],
    },
  },
  workSection: {
    heading: 'Latest work',
    projects: [
      {
        id: '1',
        title: 'Energiewerk Rügen',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'View website',
        href: 'https://energiewerk-ruegen.de',
        image: EnergiewerkDesktop,
      },
      {
        id: '2',
        title: 'Robert Denier',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'View website',
        href: 'https://robertdenier.de',
        image: RobertDenierDesktop,
      },
      {
        id: '3',
        title: 'Ferienwohnung Putbus',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'View website',
        href: 'https://ferienwohnung-putbus.de',
        image: FewoPutbusDesktop,
      },
      {
        id: '4',
        title: 'WebBuddy',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'View website',
        href: 'https://webbuddy.robinwittkamp.com',
        image: WebbuddyDesktop,
      },
      {
        id: '5',
        title: 'Klifra',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'View website',
        href: 'https://klifra.robinwittkamp.com',
        image: KlifraDesktop,
      },
      {
        id: '6',
        title: 'Bauraum MV',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'View website',
        href: 'https://bauraum-mv.de',
        image: BauraumDesktop,
      },
    ],
  },
};
