import { useState } from "react";
import instance from 'axiosConfig';

export const useLinkCreate = () => {
  const [shortLink, setShortLink] = useState(null);
  const [longUrl, setLongUrl] = useState("");
  const [errMessage, setErrMessage] = useState(null); // TODO

  async function createLink() {
    const response = await instance.post('/shorten', {
      longUrl: longUrl
    });
    setShortLink(response.data.shortLink);
  }

  return { createLink, shortLink, longUrl, setLongUrl, errMessage };
};

