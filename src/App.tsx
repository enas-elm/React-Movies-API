import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className="bg-gradient-to-b from-[#2f1f4f] to-[#200b3d] min-h-screen flex flex-col">
      <Router>
        <nav className="bg-[#000000] bg-opacity-60 backdrop-blur fixed w-full z-10 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <NavLink to="/" className="text-white text-2xl font-bold">
              Movies
            </NavLink>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8 pt-20 max-w-screen-xl flex-grow ">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
