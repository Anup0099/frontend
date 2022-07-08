
import './App.css';
import Header from './header/Header';
import Home from './pages/home/Home';
import Topbar from './Topbar/Topbar';
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Single/>
    </div>
  );
}

export default App;
