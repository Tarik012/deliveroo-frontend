const Menu = ({ title, description, price, populaire, picture }) => {
  return (
    <div className="menu-container">
      <div className="infos-menu">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price">
          <p>{price}</p>
          <p>Populaire</p>
        </div>
      </div>
      <div className="picture-menu">
        <img src={picture} alt="pholto menu"></img>
      </div>
    </div>
  );
};

export default Menu;
