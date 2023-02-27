// import BauraumDesktop from '../../public/images/bauraum-mv_desktop.png';
import EnergiewerkDesktop from '../../public/images/energiewerk-ruegen_desktop.png';
import FewoPutbusDesktop from '../../public/images/ferienwohnung-putbus_desktop.png';
import KlifraDesktop from '../../public/images/klifra_desktop.png';
// import LinTecDesktop from '../../public/images/lin-tec_desktop.png';
import OnboarderPreview from '../../public/images/onboarder_mobile.png';
import QuizBuddyDesktop from '../../public/images/quizbuddy_desktop.png';
import RobertDenierDesktop from '../../public/images/robertdenier_desktop.png';
import TextToWebDesktop from '../../public/images/text-to-web_desktop.png';
import WebBuddyDesktop from '../../public/images/webbuddy_desktop.png';

export default {
  title: 'Robin Wittkamp - Webentwickler, UI/UX Designer und freelancer',
  description:
    'Hi, ich bin Robin. Ich entwickle performante Webseiten und Webanwendungen mit Fokus auf Design und Benutzerfreundlichkeit.',
  heroSection: {
    tagline: 'Hallo 👋🏻, ich bin Robin.',
    headingOne: 'Entwickler',
    headingTwo: ' mit Begeisterung für Design und Technologie',
    subheading:
      'Ich entwerfe und entwickle Webseiten und Webanwendungen seit über vier Jahren. Studiert habe ich Computervisualistik und Design an der Hochschule Hamm-Lippstadt.',
    button: 'Projekte ansehen',
    clientLogosDescription: 'Erfolgreiche Zusammenarbeit als Freelancer mit Unternehmen wie',
    employerLogosDescription: 'Tätigkeit als Student bei Unternehmen wie',
  },
  aboutSection: {
    heading: 'Über mich',
    paragraphOne:
      'Vor 6 Jahren begann mein Interesse für das Designen und Entwickeln von Benutzeroberflächen. Resultierend startete ich mein Studium an der Hochschule Hamm-Lippstadt im Studiengang Computervisualisitk und Design. Während des Studiums war ich als studentische Hilfskraft in verschiedenen Web- und Design-Projekten tätig. Dazu gehörte z.B. die Frontend-Entwicklung einer ERP-Software für ein mittelständisches Unternehmen.',
    paragraphTwo:
      'Im Jahr 2018 meldete ich neben dem Studium weiterhin ein Gewerbe an. Seitdem implementiere ich als Freelancer Webseiten und Webanwendungen für Unternehmen aus Deutschland. Für die Umsetzung von Projekten verwende ich sowohl bewährte Technologien wie WordPress als auch modernere Technologien wie React.js oder Next.js. Zu meinen Aufgaben gehören weiterhin das Designen von Benutzeroberflächen als auch die Administration von Servern, Domains und Webhosting allgemein.',
    skills: {
      heading: 'Kenntnisse',
      items: [
        {
          heading: 'Sprachen',
          paragraph: 'HTML, CSS, SCSS, JavaScript, TypeScript, PHP, Java, Python',
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
          paragraph: 'Git, npm, Webpack, Visual Studio Code, ESLint, Prettier',
        },
        {
          heading: 'Design-Tools',
          paragraph: 'Figma, Photoshop, Illustrator',
        },
      ],
    },
    experience: {
      heading: 'Meine Erfahrung',
      items: [
        {
          id: '1',
          title: '4+',
          description: 'Jahre',
        },
        {
          id: '2',
          title: '20+',
          description: 'Kunden',
        },
        {
          id: '3',
          title: '30+',
          description: 'Projekte',
        },
      ],
    },
  },
  workSection: {
    heading: 'Aktuelle Projekte',
    projects: [
      {
        id: '1',
        title: 'Energiewerk Rügen',
        description:
          'Für die Energiewerk Rügen eG wurde die Corporate Webseite konzipiert und umgesetzt. Die Webseite wurde mit WordPress sowie einem benutzerdefinierten Theme und mehreren Plugins umgesetzt. Zu den verwendeten Sprachen gehören HTML, CSS, JavaScript und PHP.',
        buttonText: 'Webseite ansehen',
        href: 'https://energiewerk-ruegen.de',
        image: EnergiewerkDesktop,
      },
      {
        id: '2',
        title: 'Robert Denier',
        description:
          'Webseite und Online-Shop für den Fotograf und Künstler Robert Denier. Die Webseite verwendet ein benutzerdefiniertes Shopsystem basierend auf WooCommerce. Aufbauend auf WordPress und relevante Plugins wurden HTML, CSS, JavaScript und PHP verwendet.',
        buttonText: 'Webseite ansehen',
        href: 'https://robertdenier.de',
        image: RobertDenierDesktop,
      },
      {
        id: '3',
        title: 'Text to Web',
        description:
          'Im Rahmen meiner Bachelorarbeit wurde eine Webanwendung umgesetzt, mit welcher Nutzende durch die Eingabe von textlichen Instruktionen resultierende Webinhalte generieren und bearbeiten können. Die Anwendung wurde mit Bibliotheken wie React.js, Next.js, TailwindCSS und unter der Verwendung von Sprachmodellen wie GPT-3 umgesetzt.',
        buttonText: 'Code ansehen',
        href: 'https://github.com/robinwittkamp/text-to-web',
        image: TextToWebDesktop,
      },
      {
        id: '4',
        title: 'Onboarder',
        description:
          'Meine Projektarbeit absolvierte ich bei der Onboarder GmbH & Co. KG in Dortmund. In Zusammenarbeit mit den Entscheidungsträgern und Mitarbeitenden wurde eine Onboarding-Plattform konzipiert und entwickelt. Die resultierende Webanwendung wurde mit Technologien wie React.js und SCSS verwirklicht.',
        buttonText: 'Zum Unternehmen',
        href: 'https://www.onboarder.de',
        image: OnboarderPreview,
      },
      {
        id: '5',
        title: 'WebBuddy',
        description:
          'Eine Webseite, welche als Lerninhalt für das Modul Webtechnologien an der Hochschule Hamm-Lippstadt zum Einsatz kommt. Die Webseite wurde im Rahmen meiner Arbeit als studentische Hilfskraft umgesetzt. Die Webseite verwendet Technologien wie SCSS, JavaScript, PHP Pund MySQL.',
        buttonText: 'Webseite ansehen',
        href: 'https://webbuddy.robinwittkamp.com',
        image: WebBuddyDesktop,
      },
      {
        id: '6',
        title: 'Klifra',
        description:
          'Eine Webseite, welche im Rahmen des Moduls Webtechnologien an der Hochschule Hamm-Lippstadt umgesetzt wurde. Das Projekt wurde als Gruppenarbeit umgesetzt. Es wurden Technologien wie HTML, CSS, JavaScript und PHP verwendet.',
        buttonText: 'Webseite ansehen',
        href: 'https://klifra.robinwittkamp.com',
        image: KlifraDesktop,
      },
      {
        id: '7',
        title: 'Ferienwohnung Putbus',
        description:
          'Eine Webseite für Ferienwohnungen in Putbus auf Rügen. Die Webseite umfasst ein System zum Anfragen und Buchen von Wohnungen. Neben WordPress kamen hierbei Technologien wie HTML, CSS, JavaScript und PHP zum Einsatz.',
        buttonText: 'Webseite ansehen',
        href: 'https://ferienwohnung-putbus.de',
        image: FewoPutbusDesktop,
      },
      {
        id: '8',
        title: 'QuizBuddy',
        description:
          'Im Zuge meiner Arbeit als studentische Hilfskraft wurde in Zusammenarbeit mit Mitarbeitenden der Hochschule Hamm-Lippstadt eine Webanwendung entwickelt. Mit der Anwendung sollen Studierende bestimmte Inhalte des Moduls Webentwicklung interaktiv erlernen und üben können. Es kamen Technologien wie React.js und CSS zum Einsatz.',
        buttonText: '',
        href: '',
        image: QuizBuddyDesktop,
      },
      // {
      //   id: '9',
      //   title: 'Bauraum MV',
      //   description:
      //     'Die umgesetzte Webseite der Bauraum MV GmbH. Die Webseite wurde mit WordPress, einem benutzerdefinierten Theme und mehreren angepassten Plugins umgesetzt. Zu den verwendeten Sprachen gehören z.B. HTML, CSS, JavaScript und PHP.',
      //   buttonText: 'Webseite ansehen',
      //   href: 'https://bauraum-mv.de',
      //   image: BauraumDesktop,
      // },
      // {
      //   id: '10',
      //   title: 'LIN-TEC',
      //   description:
      //     'Konzeption und Programmierung der Webseite für die LIN-TEC Engineering GmbH. Die Webseite wurde mit WordPress sowie einem benutzerdefinierten Theme und mehreren Plugins umgesetzt. Zu den verwendeten Technologien gehören WordPress, JavaScript und PHP.',
      //   // buttonText: 'Webseite ansehen',
      //   // href: 'http://lin-tec.eu',
      //   image: LinTecDesktop,
      //   comingSoon: true,
      // },
    ],
  },
};
