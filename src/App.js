import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Bookstate from './components/bookstate';
import Categories from './components/Categories';
import NavigationLink from './components/menuNavigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavigationLink />
      <Routes>
        <Route path="/" element={<Bookstate />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
