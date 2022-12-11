import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    // console.log(item);

    // console.log('CART CONTEXT - after ++', qty);

    setCartList([
      ...cartList,
      {
        id: item.id,
        name: item.itemName,
        price: item.price,
        img100: item.image[0],
        // img500: item.image[1],
        // img700: item.image[2],
        qty: qty,
      },
    ]);
    console.log('CART CONTEXT - cartList - dentro func', cartList);
  };

  console.log('CART CONTEXT - cartList fuera func', cartList);

  const removeItemFromCart = id => {
    const newCart = cartList.filter(item => item.id !== id);
    setCartList(newCart);
  };

  const removeAllItemsFromCart = () => {
    cartEmpty = [];
    setCartList(cartEmpty);
  };

  return (
    <>
      <CartContext.Provider
        value={{addItem, cartList, removeItemFromCart, removeAllItemsFromCart}}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
