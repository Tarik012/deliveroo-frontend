const Menu = ({ title, description, price, popular, picture }) => {
  return (
    <div className="menu">
      <div className="infos-menu">
        <h3>{title}</h3>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="price">
          <p>{price}</p>
          <p className={popular === true ? "red" : null}>Populaire</p>
        </div>
      </div>
      {picture && (
        <div className="picture-menu">
          <img src={picture} alt="photo menu"></img>
        </div>
      )}
    </div>
  );
};

export default Menu;
