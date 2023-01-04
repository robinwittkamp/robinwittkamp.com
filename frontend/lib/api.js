const fetcher = async (url, option = {}) => {
  const response = await fetch(url, option);
  return response.json();
};

export default fetcher;
