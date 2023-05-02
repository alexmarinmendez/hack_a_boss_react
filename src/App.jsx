import { useEffect, useState } from 'react'
import { products } from './utils/products'
import ItemList from './components/ItemList'

const App = () => {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    setDatos(products)
  })

    return (
      <>
        <ItemList items={datos} />
      </>
    )
}

export default App;