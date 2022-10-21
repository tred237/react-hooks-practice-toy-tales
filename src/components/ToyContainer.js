import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, onDeleteToy, onLikeToy }) {
  return (
    <div id="toy-collection">{toyList.map(toy => <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onLikeToy={onLikeToy} />)}</div>
  );
}

export default ToyContainer;
