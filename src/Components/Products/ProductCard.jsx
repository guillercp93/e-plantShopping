export const ProductCard = ({ item, addToCart, itemAdded }) => {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} className="product-image" />
      <h2 className="product-title">{item.name}</h2>
      <p className="product-description">{item.description}</p>
      <p className="product-price">${item.cost}</p>
      <button
        className="product-button"
        onClick={addToCart}
        disabled={itemAdded}
      >
        Add to Cart
      </button>
    </div>
  );
};
