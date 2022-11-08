//import star from "../assets/images/star.png";

// import des hooks
import { useState } from "react";

import Cart from "./Cart";

const Menu = ({ title, description, price, popular, picture }) => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    if (title !== "" && price !== "") {
      console.log("title du handleClick=>", title);

      const newCart = [...cart];

      const objet = {
        title: title,
        price: price,
      };
      newCart.push(objet);
      setCart(newCart);
    }

    //return console.log("title =>", title);
  };

  return (
    <div className="menu" onClick={handleClick}>
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

      <div>
        {cart.map((item, index) => {
          console.log("title dans mon map =>", item.title);
          return <Cart key={index} title={item.title} price={item.price} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
