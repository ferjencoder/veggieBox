import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import NavBar from '../components/NavBar';
import MessageBar from '../components/MessageBar';
import CategoryBar from '../components/CategoryBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <BrowserRouter>
      <MessageBar />
      <NavBar />
      <CategoryBar />
      <Routes>
        <Route path="/home" element={<ItemListContainer />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/sanslfiltre" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
