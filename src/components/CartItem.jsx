import {useContext, useState} from 'react';
import {handleCartContext, priceInARS} from './CartContext';
import {CartContext} from './CartContext';
import ItemInCartCount from './ItemInCartCount';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

// const onAdd = (qty) => {
// 	setItemCount(qty);
// 	addItem(item, qty);
// };

const CartItem = ({item}) => {
	const {removeItemFromCart} = handleCartContext();
	const [itemCount, setItemCount] = useState(item.qty);
	const {addCountOnItem} = useContext(CartContext);
	// const {onAddFromItem} = handleCartContext();

	const onAddFromItem = (qty) => {
		setItemCount(qty);
		addCountOnItem(item, qty);
	};

	// <ItemInCartCount stock={item.stock} initial={itemCount} onAdd={onAdd} />;

	return (
		<tr key={item.id}>
			<td>
				<img src={item.image[0]} alt={item.name} />
			</td>
			<td>{item.itemName}</td>
			<td>{priceInARS(item.price)}</td>
			{
				<td>
					<ItemInCartCount stock={item.stock} initial={item.qty} item={item} onAddFromItem={onAddFromItem} />
				</td>
			}
			<td>{priceInARS(item.qty * item.price)}</td>
			<td>
				<button onClick={() => removeItemFromCart(item.id)} className='bg-transparent text-muted'>
					<FontAwesomeIcon icon={faXmark} size='xl' />
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
