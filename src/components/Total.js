const Total = ({ sousTotal, total }) => {
  return (
    <>
      <div className="sous-total">
        <div>
          <p>Sous-total</p>
          <p>{sousTotal} €</p>
        </div>
        <div>
          <p>Frais de livraison</p>
          <p>2,50 €</p>
        </div>
      </div>
      <div className="total">
        <p>Total</p>
        <p>{total} €</p>
      </div>
    </>
  );
};

export default Total;
