//import star from "../assets/images/star.jpeg";

const Menu = ({
  id,
  title,
  description,
  price,
  popular,
  picture,
  handleAdd,
}) => {
  return (
    <div
      className="menu"
      onClick={() => {
        // le clic se fait uniquement sur un élément HTML, jamais sur un composant
        // on crée un objet qui contient les infos de notre objet venant de <Menu /> pour traiter notre menu tout au long du processus
        const objet = {
          id: id,
          title: title,
          price: price,
          quantity: 1,
        };
        handleAdd(objet);
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
            {/* <span>{popular && <img src={star} alt="star"></img>}</span>*/}
            Populaire
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
