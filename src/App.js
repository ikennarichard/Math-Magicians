import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuote from './components/DisplayQuote';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/quote" element={<DisplayQuote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
