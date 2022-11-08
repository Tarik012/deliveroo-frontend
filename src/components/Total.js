const Total = ({ getSousTotal, getTotal }) => {
  return (
    <>
      <div className="sous-total">
        <div>
          <p>Sous-total</p>
          <p>{getSousTotal}</p>
        </div>
        <div>
          <p>Frais de livraison</p>
          <p>2,50 €</p>
        </div>
      </div>
      <div className="total">
        <div>
          <p>Total</p>
          <p>{getTotal}</p>
        </div>
      </div>
    </>
  );
};

export default Total;
