import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {customFetch} from '../utils/customFetch';
import ItemDetail from './ItemDetail';
import {items} from '../utils/items';
import ItemCount from './ItemCount';
// const { items } = require('../utils/items');

const ItemDetailContainer = () => {
	const [dato, setDato] = useState({});
	const {idItem} = useParams();

	useEffect(() => {
		if (idItem) {
			customFetch(
				2000,
				items.find((item) => item.id === parseInt(idItem))
			)
				.then((resultado) => setDato(resultado))
				.catch((err) => console.warn(err));
		} else {
			customFetch(2000, items)
				.then((resultado) => setDato(resultado))
				.catch((err) => console.warn(err));
		}
	}, [idItem]);

	// const onAdd = (qty) => {
	//   alert('You have selected ' + qty + ' items.');
	// };

	//<ItemCount stock={dato.stock} initial={1} onAdd={onAdd} />;

	return (
		<>
			<ItemDetail item={dato} />
		</>
	);
};

export default ItemDetailContainer;
