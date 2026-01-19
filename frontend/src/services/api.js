import axios from "axios";

const BASE = import.meta.env.VITE_BASE_URL;

export const fetchMovies = async (query, page = 1) => {
  const res = await axios.get(`${BASE}/movies?q=${query}&page=${page}`);
  return res.data;
};

export const fetchBooks = async (query, page = 1) => {
  const res = await axios.get(`${BASE}/books?q=${query}&page=${page}`);
  return res.data;
};
