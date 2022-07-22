
import './App.css';
import Header from './header/Header';
import Home from './pages/home/Home';
import Topbar from './Topbar/Topbar';
import Single from "./pages/single/Single";
import Write from './pages/Write/Write';
import Settings from './pages/settings/Settings';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Settings/>
    </div>
  );
}

export default App;
