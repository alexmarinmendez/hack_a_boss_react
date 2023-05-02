import React from 'react'
import { ProductsContainer } from '../utils/styledComponents'
import Item from './Item'

const ItemList = ({ items }) => {
  return (
    <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <p>Cargando datos...</p>
        }
    </ProductsContainer>
  )
}

export default ItemList