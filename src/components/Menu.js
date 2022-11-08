//import star from "../assets/images/star.png";

const Menu = ({
  id,
  title,
  description,
  price,
  popular,
  picture,
  cart,
  setCart,
  handleClick,
}) => {
  return (
    <div
      className="menu"
      onClick={() => {
        const objet = {
          id: id,
          title: title,
          price: price,
          quantity: 1,
        };
        handleClick(objet);
      }}
    >
      <div className="infos-menu">
        <h3>{title}</h3>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="price">
          <p>{price} €</p>
          <p className={popular ? "red" : ""}>
            Populaire
            {/* <span>{popular && <img src={star}></img>}</span>  */}
          </p>
        </div>
      </div>
      {picture && (
        <div className="picture-menu">
          <img src={picture} alt="menu" />
        </div>
      )}
    </div>
  );
};

export default Menu;
