// import BauraumDesktop from '../../public/images/bauraum-mv_desktop.png';
import EnergiewerkDesktop from '../../public/images/energiewerk-ruegen_desktop.png';
import FewoPutbusDesktop from '../../public/images/ferienwohnung-putbus_desktop.png';
import KlifraDesktop from '../../public/images/klifra_desktop.png';
import OnboarderPreview from '../../public/images/onboarder_mobile.png';
import QuizBuddyDesktop from '../../public/images/quizbuddy_desktop.png';
import RobertDenierDesktop from '../../public/images/robertdenier_desktop.png';
import TextToWebDesktop from '../../public/images/text-to-web_desktop.png';
import WebBuddyDesktop from '../../public/images/webbuddy_desktop.png';

export default {
  title: 'Robin Wittkamp - Web developer, UI/UX designer and freelancer',
  description:
    "Hi, I'm Robin. I develop performant websites and web applications with focus on design and user experience.",
  heroSection: {
    tagline: "Hi there 👋🏻, I'm Robin.",
    headingOne: 'Developer',
    headingTwo: ' passionate about design and tech',
    subheading:
      "I've designed and developed websites and web apps as a freelancer for over four years. I studied Visual Computing and Design at the Hamm-Lippstadt University of Applied Sciences.",
    button: 'View projects',
    logosDescription: 'Trusted by businesses like',
  },
  aboutSection: {
    heading: 'About me',
    paragraphOne:
      'My interest in designing and implementing user interfaces started 6 years ago. As a result I began my studies at the University of Applied Sciences Hamm-Lippstadt in the field of Visual Computing and Design. During my studies I worked as a student assistant in various web and design projects. This included e.g. the frontend development of an ERP software for a medium-sized company.',
    paragraphTwo:
      'In 2018, I additionally registered a business alongside my studies. Since then, I have been building websites and web applications for companies from Germany as a freelancer. For the implementation of projects I use both proven technologies like WordPress and more modern technologies like React.js or Next.js. My tasks also include the design of user interfaces as well as the administration of servers, domains and web hosting in general.',
    skills: {
      heading: 'Skills',
      items: [
        {
          heading: 'Languages',
          paragraph: 'HTML, CSS, SCSS, JavaScript, TypeScript, PHP, Java, Python',
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
          paragraph: 'Git, npm, Webpack, Visual Studio Code, ESLint, Prettier',
        },
        {
          heading: 'Design tools',
          paragraph: 'Figma, Photoshop, Illustrator',
        },
      ],
    },
  },
  workSection: {
    heading: 'Featured work',
    projects: [
      {
        id: '1',
        title: 'Energiewerk Rügen',
        description:
          'For Energiewerk Rügen eG both the corporate design and the website were implemented. The website was implemented with WordPress as well as a custom theme and several plugins. The languages used include HTML, CSS, JavaScript and PHP.',
        buttonText: 'View website',
        href: 'https://energiewerk-ruegen.de',
        image: EnergiewerkDesktop,
      },
      {
        id: '2',
        title: 'Robert Denier',
        description:
          'Corporate design and website for photographer and artist Robert Denier. The website uses a custom store system based on WooCommerce. Built on WordPress and relevant plugins, HTML, CSS, JavaScript and PHP were used.',
        buttonText: 'View website',
        href: 'https://robertdenier.de',
        image: RobertDenierDesktop,
      },
      {
        id: '3',
        title: 'Text to Web',
        description:
          'As part of my bachelor thesis, a web application was implemented with which users can generate and edit web content resulting from textual instructions. The application was implemented with libraries like React.js, Next.js, TailwindCSS and using language models like GPT-3.',
        buttonText: 'View code',
        href: 'https://github.com/robinwittkamp/text-to-web',
        image: TextToWebDesktop,
      },
      {
        id: '4',
        title: 'Onboarder',
        description:
          'I completed my project work at Onboarder GmbH & Co. KG in Dortmund. An onboarding platform was designed and developed in cooperation with stakeholders and employees. The resulting web application was realized using technologies such as React.js and SCSS.',
        buttonText: 'View company website',
        href: 'https://www.onboarder.de',
        image: OnboarderPreview,
      },
      {
        id: '5',
        title: 'WebBuddy',
        description:
          'A website, which is used as learning content for the module Web Technologies at Hamm-Lippstadt University of Applied Sciences. The website was implemented as part of my work as a student assistant. The website uses technologies like SCSS, JavaScript, PHP Pand MySQL.',
        buttonText: 'View website',
        href: 'https://webbuddy.robinwittkamp.com',
        image: WebBuddyDesktop,
      },
      {
        id: '6',
        title: 'Klifra',
        description:
          'A website that was implemented as part of the Web Technologies module at Hamm-Lippstadt University of Applied Sciences. The project was implemented as a group work. Technologies like HTML, CSS, JavaScript and PHP were used.',
        buttonText: 'View website',
        href: 'https://klifra.robinwittkamp.com',
        image: KlifraDesktop,
      },
      {
        id: '7',
        title: 'Ferienwohnung Putbus',
        description:
          'A corporate design including a website for vacation apartments in Putbus on the island of Rügen. The website includes a system for requesting and booking apartments. In addition to WordPress, technologies such as HTML, CSS, JavaScript and PHP were used here.',
        buttonText: 'View website',
        href: 'https://ferienwohnung-putbus.de',
        image: FewoPutbusDesktop,
      },
      {
        id: '8',
        title: 'QuizBuddy',
        description:
          'In the course of my work as a student assistant, a web application was developed in collaboration with employees of Hamm-Lippstadt University of Applied Sciences. With the application students should be able to learn and practice certain contents of the module web development interactively. Technologies like React.js and CSS were used.',
        buttonText: '',
        href: '',
        image: QuizBuddyDesktop,
      },
      // {
      //   id: '9',
      //   title: 'Bauraum MV',
      //   description:
      //     '',
      //   buttonText: 'View website',
      //   href: 'https://bauraum-mv.de',
      //   image: BauraumDesktop,
      // },
    ],
  },
};
