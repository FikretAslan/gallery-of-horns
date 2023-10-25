import HornedBeast from "../components/HornedBeast";
import BeastData from "../assets/BeastData.json";

export default function Gallery() {
  return (
    <div>
      {BeastData.map((beast) => {
        return (
          <div key={beast.title}>
            <HornedBeast
              title={beast.title}
              imageUrl={beast.imageUrl}
              description={beast.description}
            />
          </div>
        );
      })}
    </div>
  );
}
