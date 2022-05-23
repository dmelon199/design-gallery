
import { Routes, Route, Link } from "react-router-dom";


/* COMPONENTS */
import Header from './components/Header';



/* PAGES */
import Home from "./pages/Home";
import SplashPages from "./pages/SplashPages";
import GroupPages from "./pages/GroupPages";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/splashpages" element={<SplashPages />} />
        <Route path="/grouppages" element={<GroupPages />} />
      </Routes>
    </div>
  );
}

export default App;
