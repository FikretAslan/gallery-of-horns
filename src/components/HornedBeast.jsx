import { useState } from "react";

export default function HornedBeast({
  title,
  imageUrl,
  description,
  handleShowModal,
}) {
  const [likes, setLikes] = useState(0);
  function handleClicks() {
    setLikes(likes + 1);
  }
  return (
    <>
      <h2>{title}</h2>
      <img
        src={imageUrl}
        onClick={() => handleShowModal({ title, imageUrl })}
      />
      <p>{description}</p>
      <p onClick={handleClicks}>❤️ {likes} </p>
    </>
  );
}
