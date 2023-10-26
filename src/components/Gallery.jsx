import HornedBeast from "../components/HornedBeast";

export default function Gallery({ BeastData, handleShowModal }) {
  return (
    <div>
      {BeastData.map((beast) => {
        return (
          <div key={beast.title}>
            <HornedBeast
              title={beast.title}
              imageUrl={beast.imageUrl}
              description={beast.description}
              handleShowModal={handleShowModal}
            />
          </div>
        );
      })}
    </div>
  );
}
