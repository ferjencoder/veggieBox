import {useContext} from 'react'
import {CartContext} from './CartContext'
import {Button, Col, Dropdown, Form, ListGroup, Nav, Row} from 'react-bootstrap'
const Cart = () => {
  const {cartList, removeItemFromCart} = useContext(CartContext) //agregar al contexto el removeAllItemsFromCart

  //console.table('CART - itemCount', itemCount);
  console.table('CART - cartList', cartList)
  // console.table('CART - qty', qty);
  // console.table('CART - item', item);

  //todo agregar función con button removeAllItemsFromCart
  return (
    <>
      <div>Cart</div>
      <ul>
        {
          cartList.length === 0 ? (
            <p>Empty Cart</p>
          ) : (
            cartList.map(item => (
              <li key={item.id}>
                {item.name} -{/* {item.name} - <img src={item.image[0]} alt={item.name} /> - */}
                cantidad: {item.qty} -{' '}
                <button onClick={() => removeItemFromCart(item.id)}>🗑</button>
              </li>
            ))
          )
          // guardalo así prettier
        }
      </ul>
    </>
  )
}

export default Cart
