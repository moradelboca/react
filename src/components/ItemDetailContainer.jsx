import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

let itemsList = [
  {
    id: 1,
    name: "Irida",
    category: 1,
    colors: [""],
    price: 1600,
    description:
      "Collar que contiene mitad de perlas de río y mitad de discos fimo de colores.",
    imageURL: ["/irida-1", "/irida-2"],
  },
  {
    id: 2,
    name: "Happy Face",
    category: 1,
    colors: [""],
    price: 800,
    description:
      "Collar de cadena dorada con perlas y mostacilla con forma de cara feliz.",
    imageURL: ["/happy-face"],
  },
  {
    id: 3,
    name: "Hailey",
    category: 1,
    colors: ["rojo", "verde", "marron", "azul", "violeta"],
    price: 700,
    description:
      "Collar de perlas con mostacillas decorativas estilo floral y mostacillas doradas.",
    imageURL: ["/hailey", "/hailey-rojo"],
  },
  {
    id: 4,
    name: "Wild",
    category: 2,
    colors: ["negro", "celeste", "rojo"],
    price: 1600,
    description:
      "Collar que contiene mitad de perlas de río y mitad de discos fimo de colores.",
    imageURL: ["/wild-negro", "/wild-rojo"],
  },
]

export default function ItemDetailContainer() {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { itemID } = useParams()

  useEffect(() => {
    setLoading(true)
    setError(false)
    const itemPromise = new Promise ((res,rej) => {
      setTimeout(() => res(itemsList), 2000)
    })  
    itemPromise
      .then( res => {
        setItem(res.find(item => item.id == itemID))
      })
      .catch( err => setError(err) )
      .finally( () => setLoading(false) )
  }, [itemID])
  
  
  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error!</p> : null}
      {item.id ? <ItemDetail item={item} /> : null}
    </div>
  )
}
