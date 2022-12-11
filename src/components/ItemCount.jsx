import {Button, ButtonGroup, ButtonToolbar, Container} from 'react-bootstrap';
import {useContext, useEffect, useState} from 'react';
import {CartContext} from './CartContext';

const ItemCount = ({stock = 0, initial = 0, onAdd}) => {
  const [count, setCount] = useState(0);

  //ver co funk
  //onst { addItem } = useContext(CartContext);

  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Container className='d-flex mt-5'>
        <ButtonToolbar>
          <ButtonGroup
            className='me-2'
            aria-label='Aumentar o disminuir la cantidad de items'>
            <Button variant='success' onClick={decrement}>
              -
            </Button>
            <Button variant='light'>{count}</Button>
            <Button variant='success' onClick={increment}>
              +
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
        {stock && count ? (
          <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
        ) : (
          <Button disabled>Agregar al carrito</Button>
        )}
      </Container>
    </>
  );
};

export default ItemCount;
