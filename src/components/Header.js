const Header = ({ restaurant }) => {
  return (
    <div className="div-restaurant">
      <div className="infos-restaurant">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>
      <div className="picture-restaurant">
        <img src={restaurant.picture} alt="restaurant"></img>
      </div>
    </div>
  );
};

export default Header;
