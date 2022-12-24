import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {firestoreFetchOneItem} from '../utils/dbFetch';

const ItemDetailContainer = () => {
	const [dato, setDato] = useState({});
	const {idItem} = useParams();

	useEffect(() => {
		firestoreFetchOneItem(idItem)
			.then((result) => setDato(result))
			.catch((err) => console.log(err));
	}, [idItem]);

	return (
		<>
			<ItemDetail item={dato} />
		</>
	);
};

export default ItemDetailContainer;
