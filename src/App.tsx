import React from 'react';
import './App.css';
import LibraryPage from './Pages/LibraryPage';
import { preLoadBlobs, BlobSVGTexts } from './utils/blobLoading';
import CreatePokeblobPage from './Pages/CreatePokeblobPage';


function App() {
  const [ready, setReady] = React.useState(false);
  const [blobSVGTexts, setBlobSVGTexts] = React.useState<BlobSVGTexts>();

  React.useEffect(() => {
    preLoadBlobs().then((data) => {
      console.log('Blob SVG texts loaded:', data);
      setBlobSVGTexts(data);
      setReady(true);
    });
  }, []); // only runs once when the component mounts

  return (
    <div className="App">
      <h1>Pokeglobs</h1>
      {ready ? <LibraryPage cardNumber={4} blobSVGTexts={blobSVGTexts} /> : <h1>Loading......................</h1>}
      <CreatePokeblobPage />

    </div>
  );
}

//


export default App;
