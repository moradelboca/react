import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'


export default function ItemDetail({ item }) {
  const [cart, setCart] = useState([])

  function onAdd(quantityToAdd){
    let puncharse = {...item, quantity: quantityToAdd}
    setCart([...cart, puncharse])
  }
  
  useEffect(() => {
    console.log(cart)
  }, [cart])
  

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.imageURL} alt={`Foto de ${item.name}`} />
      <p>{item.description}</p>
      <ItemCount item={item} stock={5} onAdd={onAdd} />
    </div>
  )
}