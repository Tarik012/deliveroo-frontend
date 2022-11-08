// import du CSS
import "./App.css";

import logoDeliveroo from "./assets/images/logo-deliveroo.png";

// import des composants
import Header from "./components/Header";
import Menu from "./components/Menu";
import ItemCart from "./components/ItemCart";

// import des hooks
import { useState, useEffect } from "react";

// import du package npm Axios
import axios from "axios";

function App() {
  // déclaration des useState
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  // récupération des données du fichier JSON
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--backend-deliveroo--kt4528vcvgh4.code.run/"
      );

      //console.log(response.data.categories);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      //console.log(error.message)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemove = (item) => {
    const newCart = [...cart];
    const found = cart.find((elem) => {
      return elem.id === item.id;
    });

    if (found) {
      found.quantity -= 1;
    }
    console.log("found", found);
    setCart(newCart);
  };

  const handleClick = (item) => {
    const newCart = [...cart];
    const found = cart.find((elem) => {
      return elem.id === item.id;
    });

    if (!found) {
      newCart.push(item);
    } else {
      found.quantity += 1;
    }

    console.log("found", found);
    setCart(newCart);
  };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App-container">
      <div className="div-logo">
        <img src={logoDeliveroo} alt="logo deliveroo"></img>
      </div>
      <Header restaurant={data.restaurant} />
      <div className="main-container">
        {/* je parcours mon JSON pour récupèrer les noms de catégories*/}
        <div className="sections">
          <div className="section-gauche">
            {data.categories.map((elem, index) => {
              // console.log(elem);
              if (elem.meals.length !== 0) {
                return (
                  <div key={index}>
                    <h2>{elem.name}</h2>
                    <div className="menu-container">
                      {elem.meals.map((menu) => {
                        //console.log("longueur meal>>", elem.meals.length);
                        return (
                          <Menu
                            key={menu.id}
                            id={menu.id}
                            title={menu.title}
                            description={menu.description}
                            price={menu.price}
                            popular={menu.popular}
                            picture={menu.picture}
                            cart={cart}
                            setCart={setCart}
                            handleClick={handleClick}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="item-cart">
            <div className="title-itemcart">
              <h1>Valider mon panier</h1>
            </div>
            <div>
              {cart.map((item, index) => {
                //console.log("title dans mon map =>", item.title);

                if (item.quantity < 1) return null;

                return (
                  <ItemCart
                    key={index}
                    item={item}
                    handleClick={handleClick}
                    handleRemove={handleRemove}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
