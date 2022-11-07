// import du CSS
import "./App.css";

import logoDeliveroo from "./assets/images/logo-deliveroo.png";

// import des composants
import Header from "./components/Header";
import Menu from "./components/Menu";

// import des hooks
import { useState, useEffect } from "react";

// import du package npm Axios
import axios from "axios";

function App() {
  // déclaration des useState
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // récupération des données du fichier JSON
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--backend-deliveroo--kt4528vcvgh4.code.run/"
      );

      console.log(response.data.categories);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {data.categories.map((elem, index) => {
          // console.log(elem);
          return (
            <div key={index}>
              <h2>{elem.name}</h2>

              {elem.meals.map((menu) => {
                //console.log(menu);
                return (
                  <Menu
                    key={menu.id}
                    title={menu.title}
                    description={menu.description}
                    price={menu.price}
                    populaire={menu.populaire}
                    picture={menu.picture}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
