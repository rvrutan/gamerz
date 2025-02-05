import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <Footer />
    </div>
   
{/* const LandingPage = () => (
  <div>
    <Navbar isLoggedIn={false} />
    <h2 className="text-center text-2xl my-4">Most Anticipated Releases</h2>
    <div className="grid grid-cols-3 gap-4 p-4">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="box p-4 border rounded shadow">Game {index + 1}</div>
      ))}
    </div>
    <Footer />
  </div>
);

const MainPage = () => (
  <div>
    <Navbar isLoggedIn={true} />
    <div className="grid grid-cols-3 gap-4 p-4">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="box p-4 border rounded shadow">Game {index + 1}</div>
      ))}
    </div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};
 */}

    </>
  )
}

export default App;
