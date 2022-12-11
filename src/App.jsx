import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MessageBar from './components/MessageBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryBar from './components/CategoryBar';
import LandingHome from './components/LandigHome';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';
// import Home from './pages/home';

import './assets/scss/style.scss';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <MessageBar />
        <NavBar />
        <CategoryBar />
        <Routes>
          <Route path="/home" element={<LandingHome />} />
          <Route path="/" element={<LandingHome />} />
          <Route path="/sanslfiltre" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
