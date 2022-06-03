import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomeMain from './components/Home/HomeMain';
import ProductMain from './components/Products/ProductMain';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<HomeMain/>} />
        <Route path={"/purchase"} element={<ProductMain />} />
      </Routes>
    </div>
  );
}

export default App;
