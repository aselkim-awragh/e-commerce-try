const ProductItem = () => {
  return (
    <div className="product-item">
      <div className="product-head">
        <img className="product-image" src="" alt="" />
      </div>
      <div className="product-body">
        <div className="product-info">
          <span>Nom du produit</span>
          <span>00.01$</span>
        </div>
        <span className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam
          eligendi illo quibusdam eius tempora necessitatibus minima accusamus
          autem non, quo itaque iure. Impedit a culpa suscipit quidem quos
          eveniet?
        </span>
        <div className="product-btn-container">
          <input
            type="button"
            value="Add to Cart"
            className="product-add-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
