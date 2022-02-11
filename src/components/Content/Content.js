import Form from 'components/Form';
import { useUrlFetch, useLinkCreate } from "hooks";
import './Content.css';

function Content() {
  const linkToUrl = useUrlFetch(); // fetchUrl, shortLink, setShortLink, longUrl
  const urlToLink = useLinkCreate(); // createLink, shortLink, longUrl, setLongUrl

  return (
    <main className="App-content">
      <section>
        <h2>Converts a long url to a short link</h2>
        <Form submitHandler={urlToLink.createLink} 
              value={urlToLink.longUrl} 
              updateValue={urlToLink.setLongUrl} />
        <div className="Result">
          {urlToLink.shortLink && (
            <p>{urlToLink.shortLink}</p>
          )}
        </div>
      </section>
      <section>
        <h2>Returns long url for the specified short link</h2>
        <Form submitHandler={linkToUrl.fetchUrl} 
              value={linkToUrl.shortLink} 
              updateValue={linkToUrl.setShortLink} />
        <div className="Result">
          {linkToUrl.longUrl && (
            <p>{linkToUrl.longUrl}</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Content;
