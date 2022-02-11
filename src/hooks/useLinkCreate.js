import { useState } from "react";
import instance from 'axiosConfig';

export const useLinkCreate = () => {
  const [shortLink, setShortLink] = useState(null);
  const [longUrl, setLongUrl] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  async function createLink() {
    // setIsLoading(true);
    const response = await instance.post('/shorten', {
      longUrl: longUrl
    });
    setShortLink(response.data.shortLink);
    // setIsLoading(false);
  }

  return { createLink, shortLink, longUrl, setLongUrl };
};

