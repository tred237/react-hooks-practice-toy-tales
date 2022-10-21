import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    pullToyData()
  },[])

  function pullToyData(){
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToyList(data))
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(toy){
    setToyList([...toyList, toy])
  }
  
  function handleDeleteToy(deletedToy){
    const newToyList = toyList.filter(toy => toy.id !== deletedToy.id)
    setToyList(newToyList)
  }

  function handleLikeToy(likedToy){
    const newToyList = toyList.map(toy => {
      if(toy.id === likedToy.id){
        toy.likes = likedToy.likes
        return toy
      }
      return toy
    })
    setToyList(newToyList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} onDeleteToy={handleDeleteToy} onLikeToy={handleLikeToy}/>
    </>
  );
}

export default App;
