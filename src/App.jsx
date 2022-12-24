import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import CategoryBar from './components/CategoryBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import LandingHome from './components/LandigHome';
import MessageBar from './components/MessageBar';
import NavBar from './components/NavBar';

import './assets/scss/style.scss';

const App = () => {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<MessageBar />
				<NavBar />
				<CategoryBar />
				<Routes>
					<Route path='/home' element={<LandingHome />} />
					<Route path='/' element={<LandingHome />} />
					<Route path='/sanslfiltre' element={<ItemListContainer />} />
					<Route path='/category/:idCategory' element={<ItemListContainer />} />
					<Route path='/item/:idItem' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/*' element={<Navigate to='/home' />} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
};

export default App;
