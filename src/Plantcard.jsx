export default function PlantCard({ plant, onAddToCart }) {
  return (
    <article className="plant-card">
      <div className="plant-image" aria-hidden="true">
        {plant.image}
      </div>

      <h2>{plant.name}</h2>

      <button
        className="add-button"
        type="button"
        onClick={() => onAddToCart(plant)}
      >
        Add to cart
      </button>
    </article>
  );
}