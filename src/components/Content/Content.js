import CreateRandomShortLink from 'components/CreateRandomShortLink';
import CreateCustomeShortLink from 'components/CreateCustomeShortLink';
import ShortLinkInfo from 'components/ShortLinkInfo';
import './Content.css';

function Content({token}) {

  return (
    <main className="App-content">
      <CreateRandomShortLink />
      
      <div className="Benefits" >
        Log In benefits:
        <ul>
          <li>Create personal short link</li>
          <li>Control date inspiration</li>
        </ul>
      </div>

      { token && (
        <CreateCustomeShortLink token={token} />
      )}

      <ShortLinkInfo />

    </main>
  );
}

export default Content;

