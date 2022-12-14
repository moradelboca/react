import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartProvider'
import { useNavigate } from "react-router-dom"

export default function CartWidget() {
  const { cartLength } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/cart")}>
      <p>{cartLength}</p>
      <ShoppingCartIcon />
    </div>
  )
}
