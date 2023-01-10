const STORYBLOK_URL = 'https://api.storyblok.com/v2/cdn/stories';

type FetcherProps = {
  fullSlug: string;
};

const fetcher = async ({ fullSlug }: FetcherProps) => {
  try {
    const response = await fetch(
      `${STORYBLOK_URL}${fullSlug}?=${process.env.STORYBLOK_PUBLIC_TOKEN}`,
      {
        method: 'GET',
        // headers: {
        //   Authorization: `Bearer ${process.env.STORYBLOK_PUBLIC_TOKEN}`,
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
        //   token: process.env.STORYBLOK_API_KEY,
        //   version: 'published',
        //   starts_with: 'stories/pages/home',
        //   cv: 1673265851,
        // }),
      }
    );

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    // return Promise.reject(error);
  }
};

export default fetcher;
