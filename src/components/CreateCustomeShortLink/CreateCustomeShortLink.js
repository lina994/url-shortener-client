import SectionWrapper from 'components/SectionWrapper';
import { useCustomLinkCreate } from "hooks";
import './CreateCustomeShortLink.css';

function CreateCustomeShortLink({token}) {
  const { createLink, shortLink, slug, setSlug, longUrl, setLongUrl, errMessage } = useCustomLinkCreate(); 
  return (
    <SectionWrapper 
      title={'Create personal short link:'} 
      labels={["Original url:", "Slug"]} 
      submitHandler={function(){createLink(token)}} 
      values={[longUrl, slug]} 
      updateValues={[setLongUrl, setSlug]}
      resultTitle={'The short url:'} 
      resultValue={shortLink} 
      errMessage={errMessage} />
  );
}

export default CreateCustomeShortLink;

