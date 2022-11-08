const ItemCart = ({ item, handleAdd, handleRemove }) => {
  //console.log("title", title, price);
  return (
    <div>
      <div className="cart-manage">
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

        <p>{item.title}</p>
        <p>{item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default ItemCart;
