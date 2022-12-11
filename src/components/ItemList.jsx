import { ListGroup } from 'react-bootstrap';
import '../assets/scss/style.scss';
import Item from '../components/Item';
import SpinnerWidget from './SpinnerWidget';

const ItemList = (datos) => {
	console.log(datos.datos.length);

	return (
		<>
			<ListGroup className='container align-content-center d-flex flex-wrap flex-row'>
				{datos.datos.length > 0 ? (
					datos.datos.map((item) => (
						<Item
							key={item.id}
							id={item.id}
							title={item.itemName}
							category={item.category.categoryName}
							description={item.description}
							shortDescription={item.shortDescription}
							price={item.price}
							img100={item.image[0]}
							img500={item.image[1]}
							img700={item.image[2]}
							stock={item.stock}
							cookingTime={item.cookingTime}
							cookingDifficulty={item.cookingDifficulty}
							nVCalories={item.nVCalories}
							servings={item.servings}
						/>
					))
				) : (
					<SpinnerWidget />
				)}
			</ListGroup>
		</>
	);
};

export default ItemList;
