import {Badge} from 'react-bootstrap';
import {handleCartContext} from './CartContext';

const CartWidget = () => {
	const {itemsInCart} = handleCartContext();
	const itemsInCartCount = itemsInCart();

	return (
		<div>
			{itemsInCartCount === 0 ? (
				<Badge className='bg-transparent'></Badge>
			) : (
				<Badge className='navbar__badge' bg='danger'>
					{itemsInCartCount}
					<span className='visually-hidden'>{`${itemsInCartCount} productos en el carrito`}</span>
				</Badge>
			)}
		</div>
	);
};

export default CartWidget;
