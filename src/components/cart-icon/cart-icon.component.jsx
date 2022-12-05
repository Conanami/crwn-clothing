import { useContext } from "react";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toogleCartIcon = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toogleCartIcon}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
