export const apiFetch = async (path: string) => {
  const url = new URL(path, process.env.API_BASE_URL);
  const res = await fetch(url.href);
  return await res.json();
};
