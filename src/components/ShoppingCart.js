import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, deleteCart } from "../actions/shoppingAction";
import ShoppingCartItem from "./ShoppingCartItem";
import ShoppingProductItem from "./ShoppingProductItem";

const ShoppingCard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { products, cart } = state.shopping;

  return (
    <div>
      <h2>Shopping Card</h2>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ShoppingProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h2>Cart</h2>
      <article className="box">
        {cart.map((item, index) => (
          <ShoppingCartItem
            key={index}
            data={item}
            clearOneCart={() => dispatch(deleteCart(item.id))}
            clearAllCart={() => dispatch(deleteCart(item.id, true))}
          />
        ))}
        <button onClick={() => dispatch(clearCart())}>Clear</button>
      </article>
    </div>
  );
};

export default ShoppingCard;
