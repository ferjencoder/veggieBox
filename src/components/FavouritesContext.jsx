import {createContext, useState, useContext} from 'react';

export const handleFavouritesContext = () => useContext(FavouritesContext);

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({children}) => {
	const [favouritesList, setFavouritesList] = useState([]);

	const addFavourite = (item) => {
		if (itemIsInFavourites(item.id)) {
			setFavouritesList(
				favouritesList.map((itemWasInFavourites) => {
					if (itemWasInFavourites.id === item.id) return;
				})
			);
		} else {
			setFavouritesList([...favouritesList, {...item}]);
		}
	};

	const itemIsInFavourites = (id) => (favouritesList.find((item) => item.id === id) ? true : false);

	const removeItemFromFavourites = (id) => {
		const newFavourite = favouritesList.filter((item) => item.id !== id);
		setFavouritesList(newFavourite);
	};

	const removeAllItemsFromFavourites = () => setFavouritesList([]);

	return (
		<>
			<FavouritesContext.Provider
				value={{
					favouritesList,
					addFavourite,
					itemIsInFavourites,
					removeItemFromFavourites,
					removeAllItemsFromFavourites,
				}}
			>
				{children}
			</FavouritesContext.Provider>
		</>
	);
};

export default FavouritesContextProvider;
