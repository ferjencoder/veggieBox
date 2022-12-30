import {Button, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {priceInARS} from './CartContext';

const itemIsInFavourites = (id) => {
	if (favouritesList == undefined) {
		console.log('favouritesList undefined', favouritesList);
	} else {
		favouritesList.find((item) => item.id === id) ? true : false;
	}
};

const addFavourite = (id, title, img100, price) => {
	const favourite = {
		id: id,
		title: title,
		price: price,
		img100: img100,
	};

	alert('Added!!');
	if (itemIsInFavourites(favourite)) {
		setFavouritesList(
			favouritesList.map((product) => {
				return product.id === favourite.id ? {...favourite} : product;
			})
		);
	} else {
		setFavouritesList([{...favourite}]);
	}
};

const Item = ({id, title, category, shortDescription, price, img100, img500, cookingTime, cookingDifficulty, nVcalories, servings, stock}) => {
	const customStyle = {
		backgroundColor: '',
		color: '',
	};

	if (category === 'Keto') {
		customStyle.backgroundColor = '#f75f48';
		customStyle.color = 'white';
	} else if (category === 'Light') {
		customStyle.backgroundColor = '#a1d168';
		customStyle.color = 'black';
	} else if (category === 'Vegetariano') {
		customStyle.backgroundColor = '#f79432';
		customStyle.color = 'white';
	} else if (category === 'Vegano') {
		customStyle.backgroundColor = '#4f8206';
		customStyle.color = 'white';
	} else if (category === 'Sin Gluten') {
		customStyle.backgroundColor = '#ffd500';
		customStyle.color = 'black';
	} else {
		customStyle.backgroundColor = '#fe54ac';
		customStyle.color = 'white';
	}

	return (
		<div>
			<Card className='card'>
				<div className='figure'>
					<Link to={`/item/${id}`} className='p-0 m-0'>
						<Card.Img variant='top' src={img500} className='card--image' />
						<Card.Text className='card--tag position-absolute bottom-0 star-0' style={customStyle}>
							{category}
						</Card.Text>
					</Link>
				</div>
				<Card.Body className='pt-0 position-relative'>
					<Link to={`/item/${id}`} className='p-0 m-0'>
						<Card.Title className='card--header'>{title}</Card.Title>
						<Card.Text className='card--text'>
							<small>{shortDescription}</small>
						</Card.Text>
						<Card.Text className='card--text position-absolute top-50 end-0 translate-middle-y d-flex px-3 py-1 mt-5 text-end' style={customStyle}>
							{priceInARS(price)}
						</Card.Text>
						<Card.Text className='card--text__subtxt mb-2 text-muted position-absolute bottom-0 start-50 translate-middle-x d-flex p-2 text-center'>
							<span className='fw-bold'>🕓 {cookingTime}</span>
							{'min  |  ' + cookingDifficulty + '  |  ' + servings + ' porciones  |  ' + nVcalories + ' | Stock: ' + stock}
						</Card.Text>
					</Link>
				</Card.Body>
				<Link to={`/item/${id}`} className='p-0 m-0'>
					<Button size='lg' className='card--button shadow-0 d-flex w-100' style={customStyle}>
						Ver más
					</Button>
				</Link>
				<div>
					<Button
						onClick={() => {
							addFavourite(id, title, img100, price);
						}}
						className='btn-favourite top-0 end-0 shadow-none border-0'
						style={customStyle}
					>
						<FontAwesomeIcon icon={faHeart} size='xl' className='text-white' />
						<span className='visually-hidden'>Agregar a Favoritos</span>
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default Item;
