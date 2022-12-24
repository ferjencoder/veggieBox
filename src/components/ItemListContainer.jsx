import ItemList from './ItemList';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {db} from '../utils/firebaseConfig';
import {collection, getDocs, query, where} from 'firebase/firestore';
// import {firestoreFetch} from '../utils/dbFetch';
// import {customFetch} from '../utils/customFetch';
// import {items} from '../utils/items';
// import {async} from '@firebase/util';
// import ItemCount from './ItemCount';

//se encarga de hacer la consulta a la api y bajar los datos para propearlos al ItemList

const ItemListContainer = () => {
	const [datos, setDatos] = useState([]);
	const {idCategory} = useParams();

	// // //componentDidMount
	// useEffect(() => {
	// 	// //consulta BD
	// 	const fetchFromFirestore = async () => {
	// 		try {
	// 			const querySnapshot = await getDocs(collection(db, 'items'));
	// 			// const datos = querySnapshot();
	// 			// console.log(items);

	// 			const datos = [querySnapshot];
	// 			querySnapshot.forEach((doc) => {
	// 				console.log(`${doc.id} => ${doc.data()}`);
	// 				console.log(`Mis datos son ${JSON.stringify(doc.data())}`);
	// 				console.log(querySnapshot);
	// 			});
	// 			setDatos(datos);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	fetchFromFirestore();
	// });

	////////////////////////////////////////////////////////////////////////////////

	// // 	useEffect(() => {
	// // 		// consulta BD
	// // 		if (idCategory) {
	// // 			customFetch(
	// // 				2000,
	// // 				items.filter((item) => item.categoryId === parseInt(idCategory))
	// // 			)
	// // 				.then((resultado) => setDatos(resultado))
	// // 				.catch((err) => console.log(err));
	// // 		} else {
	// // 			customFetch(2000, items)
	// // 				.then((resultado) => setDatos(resultado))
	// // 				.catch((err) => console.log(err));
	// // 		}
	// // 	}, [idCategory]);

	// // 	// console.log(datos);

	// // 	return (
	// // 		<>
	// // 			<ItemList datos={datos} />
	// // 		</>
	// // 	);
	// // };
	////////////////////////////////////////////////////////////////////////////////

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
				// transformar el tipo de dato documento que proviene de la db a objetos
				// los docs parecen objetos pero no son iguales

				id: item.id,
				...item.data(),
			}));
			return dataFromFirestore;
		};

		fetchFromFirestore()
			.then((result) => setDatos(result))
			.catch((err) => console.log(err));

		// async function queryForDocuments() {
		// 	const querySnapshot = await getDocs(collection(db, 'items'));
		// 	const datos = querySnapshot.docs.map((item) => ({
		// 		id: item.id,
		// 		...item.data(),
		// 	}));

		// 	querySnapshot.forEach((doc) => {
		// 		console.log(`${doc.id} => ${doc.data()}`);
		// 	});
		// 	console.log('datos', {datos});

		// 	setDatos(datos);
		// }

		// queryForDocuments()
		// 	.then((result) => setDatos(result))
		// 	.catch((err) => console.log(err));
	}, [idCategory]);

	//componentWillUnmount
	useEffect(() => {
		return () => {
			setDatos([]);
		};
	}, []);

	return (
		// componente agnóstico, no debe ser modificado cuando cambio el origen de los datos
		<ItemList datos={datos} />
	);
	////////////////////////////////////////////////////////////////////////////////
	//WORKING
	//WORKING
	//WORKING
	// // // // useEffect(() => {
	// // // // 	// consulta BD
	// // // // 	if (idCategory) {
	// // // // 		customFetch(
	// // // // 			2000,
	// // // // 			items.filter((item) => item.categoryId === parseInt(idCategory))
	// // // // 		)
	// // // // 			.then((resultado) => setDatos(resultado))
	// // // // 			.catch((err) => console.log(err));
	// // // // 	} else {
	// // // // 		customFetch(2000, items)
	// // // // 			.then((resultado) => setDatos(resultado))
	// // // // 			.catch((err) => console.log(err));
	// // // // 	}
	// // // // }, [idCategory]);
	////////////////////////////////////////////////////////////////////////////////

	// // // //componentDidUpdate
	// // // useEffect(() => {
	// // // 	firestoreFetch(idCategory)
	// // // 		.then((result) => setDatos(result))
	// // // 		.catch((err) => console.log(err));
	// // // }, [idCategory]);

	// // // console.log(idCategory);

	// // // //componentWillUnmount
	// // // useEffect(() => {
	// // // 	return () => {
	// // // 		setDatos([]);
	// // // 	};
	// // // }, []);
};

export default ItemListContainer;
