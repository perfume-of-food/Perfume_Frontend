import "./App.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Menu } from './pages/Menu/Menu';
import { MenuFood } from './pages/MenuFood/MenuFood'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuFood />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menufood" element={<Home />} />
        <Route path="/desert" element={<MenuFood />} />
        <Route path="/drink" element={<MenuFood />} />
        <Route path="/snacks" element={<MenuFood />} />
        <Route path="/others" element={<MenuFood />} />

      </Routes>
    </Router>
  );
}

export default App;

