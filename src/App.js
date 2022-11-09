// import du CSS
import "./App.css";

import logoDeliveroo from "./assets/images/logo-deliveroo.png";

// import des composants
import Header from "./components/Header";
import Menu from "./components/Menu";
import ItemCart from "./components/ItemCart";
import Total from "./components/Total";

// import des hooks
import { useState, useEffect } from "react";

// import du package npm Axios
import axios from "axios";

function App() {
  // déclaration des useState
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [sousTotal, setSousTotal] = useState(0);
  const [total, setTotal] = useState(0);

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
  }, [cart]); // à chaque fois que mon panier change, permets d'afficher le total an ajoutant un menu différent du premier

  const totalCommande = () => {
    let sousTotalCommande = 0; // instancier pour ne pas avoir de undefined ou un problème de NaN si price est un string
    for (let i = 0; i < cart.length; i++) {
      sousTotalCommande += cart[i].price * cart[i].quantity;
    }
    setSousTotal(sousTotalCommande.toFixed(2));
    setTotal((sousTotalCommande + 2.5).toFixed(2)); // gérer autrement les frais de livraison !!!
  };

  const handleRemove = (item) => {
    // au clic sur le moins, on retire un article (<=> dimininuer la quantité de 1)
    const newCart = [...cart];
    const found = newCart.find((elem) => {
      return elem.id === item.id;
    });

    if (found) {
      found.quantity -= 1;
    }
    setCart(newCart);
    totalCommande(); // on calcule notre sous-total ains que le total
  };

  const handleAdd = (item) => {
    const newCart = [...cart];
    const found = newCart.find((elem) => {
      return elem.id === item.id; //retourne l'objet found
    });

    if (!found) {
      newCart.push(item); //ajout nouveau menu
    } else {
      found.quantity += 1;
    }
    setCart(newCart);
    totalCommande(); // calcule le sous-total et le total
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
                            handleAdd={handleAdd}
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
          {/* mettre une condition pour afficher le panier => item.quantity !== 1 ? () : ()*/}
          <div className="item-cart">
            <div className="title-itemcart">
              <h1>Valider mon panier</h1>
            </div>
            <div className="meals-cart">
              {cart.map((item, index) => {
                //console.log("title dans mon map =>", item.title);

                if (item.quantity < 1) return null; // n'affiche pas le panier s'il n'y a pas de menu sélectionné

                return (
                  <ItemCart
                    key={index}
                    item={item}
                    handleAdd={handleAdd}
                    handleRemove={handleRemove}
                    sousTotal={sousTotal}
                    total={total}
                  />
                );
              })}
            </div>
            <div className="total-manage">
              <Total sousTotal={sousTotal} total={total} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
