import PlantCard from "./Plantcard";

export default function PlantList({ plants, onAddToCart }) {
  return (
    <div className="plant-grid">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}