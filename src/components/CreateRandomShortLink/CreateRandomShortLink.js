import SectionWrapper from 'components/SectionWrapper';
import { useLinkCreate } from "hooks";
import './CreateRandomShortLink.css';

function CreateRandomShortLink() {
  const { createLink, shortLink, longUrl, setLongUrl, errMessage } = useLinkCreate(); 
  return (
    <SectionWrapper 
      title={'Create random short link:'} 
      labels={["Original url:"]} 
      submitHandler={createLink} 
      values={[longUrl]} 
      updateValues={[setLongUrl]}
      resultTitle={'The short url:'} 
      resultValue={shortLink} 
      errMessage={errMessage} />
  );
}

export default CreateRandomShortLink;

