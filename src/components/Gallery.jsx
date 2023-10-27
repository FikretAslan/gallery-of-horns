import HornedBeast from "../components/HornedBeast";

export default function Gallery({ BeastData, handleShowModal, horns }) {
  const filteredHorns = BeastData.filter(
    (beast) => beast.horns == horns || horns === ""
  );
  return (
    <div>
      {filteredHorns.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.imageUrl}
            description={beast.description}
            handleShowModal={handleShowModal}
          />
        );
      })}
    </div>
  );
}
