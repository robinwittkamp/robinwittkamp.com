import fs from 'fs';
import matter from 'gray-matter';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import path from 'path';
import ReactMarkdown from 'react-markdown';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
// import localDe from '../locales/de/imprint';
// import localEn from '../locales/en/imprint';

const Imprint = ({ content }) => {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title="Placecholder" description="Placecholder" noIndex />
      <Section first maxScreenWidth="md">
        {console.log(content)}
        <div className="prose-a: prose-lg prose-invert prose-headings:font-gilroy prose-p:text-rusty-400 prose-a:text-orange-500">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </Section>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const readFile = fs.readFileSync(path.join('posts', filename), 'utf-8');

    const { data: frontmatter, content } = matter(readFile);

    return {
      frontmatter,
      slug,
      content,
    };
  });

  return {
    props: {
      content: posts[0].content,
    },
  };
};

export default Imprint;
