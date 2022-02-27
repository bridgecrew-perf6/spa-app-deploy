import axios from "axios";

export const getApi = async (path: string) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  return await axios.get(url.href).then((r) => r.data);
};

export const postApi = async (path: string, body: object) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  return await axios
    .post(url.href, {
      ...body,
    })
    .then((r) => r.data);
};

export const putApi = async (path: string, body: object) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  return await axios
    .put(url.href, {
      ...body,
    })
    .then((r) => r.data);
};

export const deleteApi = async (path: string) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  return await axios.delete(url.href).then((r) => r.data);
};
