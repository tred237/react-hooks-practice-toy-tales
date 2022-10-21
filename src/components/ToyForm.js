import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    likes: 0
  })

  function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  function handleSubmitClick(e){
    e.preventDefault()

    const newToy = {
      name: formData.name,
      image: formData.image,
      likes: formData.likes
    }

    fetch('http://localhost:3001/toys',{
      method: 'POST',
      headers: {
       'Content-Type': 'application/json' 
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then((newToy) => onAddToy(newToy))

    clearForm()
  }

  function clearForm(){
    setFormData({
      name: '',
      image: '',
      likes: 0
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmitClick}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
