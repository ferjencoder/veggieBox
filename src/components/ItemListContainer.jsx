import ItemList from './ItemList';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {db} from '../utils/firebaseConfig';
import {collection, getDocs, query, where} from 'firebase/firestore';

import {customFetch} from '../utils/customFetch';
import {items} from '../utils/items';
import {async} from '@firebase/util';

//consulta a la api y baja los datos para propearlos al ItemList
const ItemListContainer = () => {
	const [datos, setDatos] = useState([]);
	const {idCategory} = useParams();

	/////////////////////////////////////////////////////////////////////////////
	// EN CASO QUE SE LLENE LA QUOTA EN FIRESTORE
	// useEffect(() => {
	// consulta db hardcodeada
	// 	if (idCategory) {
	// 		customFetch(
	// 			2000,
	// 			items.filter((item) => item.categoryId === parseInt(idCategory))
	// 		)
	// 			.then((resultado) => setDatos(resultado))
	// 			.catch((err) => console.log(err));
	// 	} else {
	// 		customFetch(2000, items)
	// 			.then((resultado) => setDatos(resultado))
	// 			.catch((err) => console.log(err));
	// 	}
	// }, [idCategory]);

	/////////////////////////////////////////////////////////////////////////////
	// WORKING
	useEffect(() => {
		// ComponentDidUpdate
		const fetchFromFirestore = async () => {
			let q;

			if (idCategory) {
				q = query(collection(db, 'items'), where('categoryId', '==', parseInt(idCategory)));
			} else {
				//undefined (devolder todos los productos)
				q = query(collection(db, 'items'));
			}

			const querySnapshot = await getDocs(q);

			const dataFromFirestore = querySnapshot.docs.map((item) => ({
				// transformar el tipo de dato documento que proviene de la db a objetos, los docs parecen objetos pero no son iguales
				id: item.id,
				...item.data(),
			}));
			return dataFromFirestore;
		};

		fetchFromFirestore()
			.then((result) => setDatos(result))
			.catch((err) => console.log(err));
	}, [idCategory]);

	//componentWillUnmount
	useEffect(() => {
		return () => {
			setDatos([]);
		};
	}, []);
	/////////////////////////////////////////////////////////////////////////////

	return <ItemList datos={datos} />;
};

export default ItemListContainer;
