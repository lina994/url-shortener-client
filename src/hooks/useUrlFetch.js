import { useState } from "react";
import instance from 'axiosConfig';

export const useUrlFetch = () => {
  const [shortLink, setShortLink] = useState("");
  const [longUrl, setLongUrl] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  async function fetchUrl() {
    try {
      setErrMessage(null);
      const linkParts = shortLink.split('/');
      const slug = linkParts[linkParts.length - 1];
      const endpoint = linkParts[linkParts.length - 2] ==='r' ? '/shorten' : '/custom/shorten';
      
      const response = await instance.get(endpoint, {
        params: {
          slug: slug
        }
      });
      setLongUrl(response.data.url);
    } catch(error) {
      setErrMessage(error.response.data.message);
    }
  }

  return { fetchUrl, shortLink, setShortLink, longUrl, errMessage };
};

