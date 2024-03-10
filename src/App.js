import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Jobs from "./Pages/Jobs/Jobs";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <div className="App">
{/* <Landing/> */}
    
         <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} /> 
        </Routes>
       
    </div>
  );
}

export default App;
