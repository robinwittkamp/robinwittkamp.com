const STORYBLOK_URL = 'https://api.storyblok.com/v2/cdn/stories';

const handler = async (req, res) => {
  // Return an error if Storyblok API key is not set
  if (!process.env.STORYBLOK_PUBLIC_TOKEN) {
    res.status(401).json({
      error:
        'AI21_API_KEY not set. Please set the key in your environment and redeploy the app to use this endpoint',
    });
    return;
  }

  const response = await fetch(STORYBLOK_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STORYBLOK_PUBLIC_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: process.env.STORYBLOK_API_KEY,
      version: 'draft',
      starts_with: 'stories/',
      cv: Date.now(),
    }),
  });

  const result = await response.json();
  console.log(result);

  return result;
};

export default handler;
