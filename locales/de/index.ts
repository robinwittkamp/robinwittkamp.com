import BauraumDesktop from '../../public/images/bauraum-mv_desktop.png';
import EnergiewerkDesktop from '../../public/images/energiewerk-ruegen_desktop.png';
import FewoPutbusDesktop from '../../public/images/ferienwohnung-putbus_desktop.png';
import KlifraDesktop from '../../public/images/klifra_desktop.png';
import RobertDenierDesktop from '../../public/images/robertdenier_desktop.png';
import WebbuddyDesktop from '../../public/images/webbuddy_desktop.png';

export default {
  title: 'Robin Wittkamp - Webentwickler, UI/UX Designer und freelancer',
  description:
    'Hi, ich bin Robin. Ich entwickle performante Webseiten und Webanwendungen mit Fokus auf Design und Benutzerfreundlichkeit.',
  heroSection: {
    tagline: 'Hallo 👋🏻, ich bin Robin.',
    headingOne: 'Entwickler',
    headingTwo: ' mit Begeisterung für Design und Technologie',
    subheading:
      'Ich entwerfe und entwickle Webseiten und Webanwendungen seit über vier Jahren als Freelancer. Studiert   habe ich Computervisualistik und Design an der Hochschule Hamm-Lippstadt.',
    button: 'Projekte ansehen',
    logosDescription: 'Erfolgreiche Zusammenarbeit mit Unternehmen aus Deutschland',
  },
  aboutSection: {
    heading: 'Über mich',
    paragraphOne:
      'Vor 6 Jahren startete mein Interesse für das Designen und Umsetzen von Benutzeroberflächen. Resultierend begann ich mein Studium an der Hochschule Hamm-Lippstadt im Studiengang Computervisualisitk und Design. Während des Studiums war ich als studentische Hilfskraft in verschiedenen Web- und Design-Projekten tätig. Dazu gehörte z.B. die Frontend-Entwicklung einer ERP-Software für ein mittelständisches Unternehmen.',
    paragraphTwo:
      'Im Jahr 2018 meldete ich neben dem Studium weiterhin ein Gewerbe an. Seitdem implementiere ich als Freelancer Webseiten und Webanwendungen für Unternehmen aus Deutschland. Für die Umsetzung von Projekten verwende ich sowohl bewährte Technologien wie WordPress als auch modernere Technologien wie React.js oder Next.js. Zu meinen Aufgaben gehören weiterhin das Designen von Benutzeroberflächen als auch die Administration von Servern, Domains und Webhosting allgemein.',
    skills: {
      heading: 'Kenntnisse',
      items: [
        {
          heading: 'Sprachen',
          paragraph: 'HTML, CSS, SCSS, JavaScript, TypeScript, PHP, Python, Java',
        },
        {
          heading: 'Frontend',
          paragraph: 'React.js, Next.js, TailwindCSS, Framer Motion, Three.js',
        },
        {
          heading: 'Backend',
          paragraph: 'Node.js, Express.js, MySQL, Rest-API',
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
          heading: 'Entwickler-Tools',
          paragraph: 'Git, npm, Visual Studio Code, ESLint, Prettier',
        },
        {
          heading: 'Design-Tools',
          paragraph: 'Figma, Photoshop, Illustrator',
        },
      ],
    },
  },
  workSection: {
    heading: 'Neueste Projekte',
    projects: [
      {
        id: '1',
        title: 'Energiewerk Rügen',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'Webseite ansehen',
        href: 'https://energiewerk-ruegen.de',
        image: EnergiewerkDesktop,
      },
      {
        id: '2',
        title: 'Robert Denier',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'Webseite ansehen',
        href: 'https://robertdenier.de',
        image: RobertDenierDesktop,
      },
      {
        id: '3',
        title: 'Ferienwohnung Putbus',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'Webseite ansehen',
        href: 'https://ferienwohnung-putbus.de',
        image: FewoPutbusDesktop,
      },
      {
        id: '4',
        title: 'WebBuddy',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'Webseite ansehen',
        href: 'https://webbuddy.robinwittkamp.com',
        image: WebbuddyDesktop,
      },
      {
        id: '5',
        title: 'Klifra',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'Webseite ansehen',
        href: 'https://klifra.robinwittkamp.com',
        image: KlifraDesktop,
      },
      {
        id: '6',
        title: 'Bauraum MV',
        description:
          'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
        buttonText: 'Webseite ansehen',
        href: 'https://bauraum-mv.de',
        image: BauraumDesktop,
      },
    ],
  },
};
