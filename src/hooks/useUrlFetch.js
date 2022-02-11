import { useState } from "react";
import instance from 'axiosConfig';

export const useUrlFetch = () => {
  const [shortLink, setShortLink] = useState("");
  const [longUrl, setLongUrl] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  async function fetchUrl() {
    // setIsLoading(true);
    const response = await instance.get('/shorten', {
      params: {
        shortLink: shortLink
      }
    });
    setLongUrl(response.data.url);
    // setIsLoading(false);
  }

  return { fetchUrl, shortLink, setShortLink, longUrl };
};

