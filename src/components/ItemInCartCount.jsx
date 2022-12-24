import {Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import {useState} from 'react';
import {handleCartContext} from './CartContext';

const ItemInCartCount = ({stock = 0, initial = 0, item}) => {
	const [itemCountCart, setItemCountCart] = useState(initial);
	const {addCountOnItem} = handleCartContext();

	const increment = (itemCountCart) => {
		if (itemCountCart < stock) {
			setItemCountCart(itemCountCart + 1);
			addCountOnItem(item, itemCountCart);
		}
	};

	const decrement = (itemCountCart) => {
		if (itemCountCart === 0) {
			return;
		} else {
			setItemCountCart(itemCountCart - 1);
			addCountOnItem(item, itemCountCart);
		}
	};

	return (
		<ButtonToolbar>
			<ButtonGroup className='me-2' aria-label='Aumentar o disminuir la cantidad de items'>
				<Button variant='success' onClick={() => decrement(itemCountCart)}>
					-
				</Button>
				<Button variant='light'>{itemCountCart}</Button>
				<Button variant='success' onClick={() => increment(itemCountCart)}>
					+
				</Button>
			</ButtonGroup>
		</ButtonToolbar>
	);
};

export default ItemInCartCount;
