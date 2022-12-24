import NavBarCartItem from './NavBarCartItem';
import {handleCartContext} from './CartContext';
import {ListGroup} from 'react-bootstrap';

const NavBarCartList = () => {
	const {cartList} = handleCartContext();

	// return <NavBarCartItem cartList={cartList} />;
	return <ListGroup variant='flush'>{cartList.length > 0 ? cartList.map((item) => <NavBarCartItem key={item.id} id={item.id} itemName={item.itemName} price={item.price} img100={item.image[0]} itemQty={item.qty} category={item.category.categoryName} />) : <p>whots this</p>}</ListGroup>;
};

export default NavBarCartList;
