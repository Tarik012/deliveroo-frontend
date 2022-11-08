const ItemCart = ({ item, handleClick, handleRemove }) => {
  //console.log("title", title, price);
  return (
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
          handleClick(item);
        }}
      >
        +
      </button>

      <p>{item.title}</p>
      <p>{item.price * item.quantity}</p>
    </div>
  );
};

export default ItemCart;
