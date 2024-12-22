import React from 'react';
import './App.css';
import LibraryPage from './Pages/LibraryPage';
import { preLoadBlobs, BlobSVGTexts } from './utils/blobLoading';
import CreatePokeblobPage from './Pages/CreatePokeblobPage';
import Background from './Components/Background';
import { Link, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';


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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreatePokeblobPage />} />
        <Route path="/library" element={<LibraryPage cardNumber={1} blobSVGTexts={blobSVGTexts} />} />
      </Routes>
    );
  }

  return (
    <div className="App">
      <Background blobSVGTexts={blobSVGTexts} />
      <Link to="/create"><button>go to /create</button></Link>
      {content()}
    </div>
  );
}

//


export default App;
