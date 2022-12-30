import {useState, useEffect} from 'react';
import LandingCarouselList from './LandingCarouselList';
import db from '../utils/firebaseConfig';
import {collection, getDocs, query} from 'firebase/firestore';
import {useParams} from 'react-router';
// import {customFetch} from '../utils/customFetch';
// import {items} from '../utils/items';

const LandingCarouselContainer = () => {
	const [datos, setDatos] = useState([]);
	const {idCategory} = useParams();

	/////////////////////////////////////////////////////////////////////////////
	//	EN CASO QUE SUPERE LA QUOTA EN FIRESTORE
	// useEffect(() => {
	// 	// consulta BD
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
			let q = query(collection(db, 'items'));
			const querySnapshot = await getDocs(q);
			const dataFromFirestore = querySnapshot.docs.map((item) => ({
				id: item.id,
				...item.data(),
			}));
			return dataFromFirestore;
		};

		fetchFromFirestore()
			.then((result) => setDatos(result))
			.catch((err) => console.log(err));
	}, [datos]);

	//componentWillUnmount
	useEffect(() => {
		return () => {
			setDatos([]);
		};
	}, []);

	/////////////////////////////////////////////////////////////////////////////
	return <LandingCarouselList datos={datos} />;
};

export default LandingCarouselContainer;
