import {query, orderBy, where, collection, getDocs} from '@firebase/firestore';
import {doc, getDoc} from 'firebase/firestore';
import db from './firebaseConfig';

export const firestoreFetch = async (idCategory) => {
	let item;
	if (idCategory) {
		item = query(collection(db, 'items'), where('categoryId', '==', idCategory));
		console.log('doFetch', idCategory);
	} else {
		item = query(collection(db, 'items'), orderBy('itemName'));
		console.log('doFetch', idCategory);
	}
	const querySnapshot = await getDocs(item);
	const dataFromFirestore = querySnapshot.docs.map((document) => ({
		id: document.id,
		...document.data(),
	}));
	return dataFromFirestore;
};

export const firestoreFetchOne = async (id) => {
	const docRef = doc(db, 'items', id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return {
			id: id,
			...docSnap.data(),
		};
	} else {
		// doc.data() will be undefined in this case
		console.log('No such document!');
	}
};
