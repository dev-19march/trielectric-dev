 import './App.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navabar';
import Centralize from './components/Centralize';
import Derms from './components/Derms';


function App() {
  return (
    <div className="App">
 <Navbar/>
 <Centralize/>
 <Derms/>
    </div>
  );
}

export default App;
