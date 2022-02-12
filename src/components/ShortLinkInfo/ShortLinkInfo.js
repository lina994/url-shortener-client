import SectionWrapper from 'components/SectionWrapper';
import { useUrlFetch } from "hooks";
import './ShortLinkInfo.css';

function ShortLinkInfo() {
  const { fetchUrl, shortLink, setShortLink, longUrl, errMessage } = useUrlFetch(); 
  return (
    <SectionWrapper 
      title={'Get link info:'} 
      labels={["Short url:"]} 
      submitHandler={fetchUrl} 
      values={[shortLink]} 
      updateValues={[setShortLink]}
      resultTitle={'The original url:'} 
      resultValue={longUrl} 
      errMessage={errMessage} />
  );
}

export default ShortLinkInfo;

