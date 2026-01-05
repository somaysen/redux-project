import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Login API
export const loginUser = async (data) => {
  const res = await API.post("/login", data);
  return res; // return full axios response so callers can access `res.data`
};

export const registerUser = async (data) => {
  const res = await API.post("/register", data);
  return res.data;
};


export const fetchAllMedia = async (query) => {
  const res = await API.get("/posts/media", {
    params: { query },
  });
  console.log(res.data);
  return res.data;
}

export const fetchPhotos = async (query) => {
  const res = await API.get("/posts/media", {
    params: { query },
  });
  // console.log(res.data);
  return res.data;
}

export const fetchVideo = async (query) => {
  const res = await API.get("/posts/media", {
    params: { query },
  });
  // console.log(res.data);
  return res.data;
}

export const fetchGIF = async (query) => {
  const res = await API.get("/posts/media", {
    params: { query },
  });
  // console.log(res.data);
  return res.data;
}


export default {
  fetchGIF,
  fetchPhotos,
  fetchVideo,
  loginUser,
  registerUser,
  fetchAllMedia,
}