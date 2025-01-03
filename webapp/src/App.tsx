import React from 'react';
import './App.css';
import LibraryPage from './Pages/LibraryPage';
import { preLoadBlobs, BlobSVGTexts } from './utils/blobLoading';
import CreatePokeblobPage from './Pages/CreatePokeblobPage';
import Background from './Components/Background';
import { Link, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import GeneratingPage from './Pages/GeneratingPage';
import NotFoundPage from './Pages/NotFoundPage';

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

  function content() {
    return (
      <>
        <Background blobSVGTexts={blobSVGTexts} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreatePokeblobPage />} />
          <Route path="/generating" element={<GeneratingPage />} />
          <Route path="/library" element={<LibraryPage cardNumber={1} blobSVGTexts={blobSVGTexts} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    );
  }

  return (
    <div className="App">
      {ready ? content() : <h1>Loading...<h2>Loading...</h2></h1>}
    </div>
  );
}

//


export default App;
