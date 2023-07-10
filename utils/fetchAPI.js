import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

const fetchAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "5f39635c49msh1e63c99047a5d09p1d7526jsn44c760b940eb",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

export { fetchAPI };
