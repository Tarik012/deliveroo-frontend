const ItemCart = ({ item, handleAdd, handleRemove }) => {
  //console.log("title, price", item.title, item.price);
  return (
    <div className="cart-manage">
      <div className="button-cart">
        <button
          onClick={() => {
            handleRemove(item);
          }}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => {
            handleAdd(item);
          }}
        >
          +
        </button>
      </div>

      <div>
        <p>{item.title}</p>
      </div>
      <div>
        <p>{(item.price * item.quantity).toFixed(2)} €</p>
      </div>
    </div>
  );
};

export default ItemCart;
