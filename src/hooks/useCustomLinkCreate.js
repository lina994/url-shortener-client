import { useState } from "react";
import instance from 'axiosConfig';

export const useCustomLinkCreate = () => {
  const [shortLink, setShortLink] = useState(null);
  const [slug, setSlug] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [errMessage, setErrMessage] = useState(null);

  async function createLink(token) {
    try {
      setErrMessage(null);
      const response = await instance.post('/custom/shorten', {
        longUrl: longUrl,
        slug: slug
      },
      {
        headers: {"Authorization" : `Bearer ${token}`}
      });
      setShortLink(response.data.shortLink);
    } catch(error) {
      setErrMessage(error.response.data.message);
    }
    
  }

  return { createLink, shortLink, slug, setSlug, longUrl, setLongUrl, errMessage };
};

