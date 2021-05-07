import Link from 'next/link';

const Footer = () => (
  <footer>
    <span className="text-gray-500 dark:text-true-gray-500">© 2021 robin wittkamp</span>
    <ul>
      <li>
        <Link href="/imprint">
          <a>Imprint</a>
        </Link>
      </li>
      <li>
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
