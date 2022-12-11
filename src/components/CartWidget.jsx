import {Badge, Button} from 'react-bootstrap';
import {useContext} from 'react';
import CartContext from './CartContext';

const CartWidget = () => {
  //useContext(CartContext);
  //TODO Implementar función global para que cuente la cant de items en el carrito

  return (
    <div>
      <Badge className='navbar__badge' bg='danger'>
        {4}
        {/* <Badge className="navbar__badge" badgeContent={4} bg="secondary"> */}
        <span className='visually-hidden'>unread messages</span>
      </Badge>
    </div>
  );
};

export default CartWidget;
