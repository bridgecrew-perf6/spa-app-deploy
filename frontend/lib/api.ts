export const apiFetch = async (path: string) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  const res = await fetch(url.href);
  return await res.json();
};
