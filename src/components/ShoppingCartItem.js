const ShoppingCartItem = ({ data, clearOneCart, clearAllCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div style={{ textAlign: "center", borderBottom: "1px solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}x {quantity} = ${price * quantity}
      </h5>
      <button onClick={() => clearOneCart(id)}>Delete One</button>
      <button onClick={() => clearAllCart(id, true)}>Delete All</button>
    </div>
  );
};

export default ShoppingCartItem;
