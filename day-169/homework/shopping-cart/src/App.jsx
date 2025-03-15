import { useContext, useEffect } from 'react'
import MyCart from './components/MyCart'
import Shop from './components/Shop'
import { ActionsContext } from './context/CartContext'

const App = () => {

  const { myCart } = useContext(ActionsContext);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(myCart));
  }, [myCart])

  return (
    <div>
        <Shop />
        <MyCart />
    </div>
  )
}

export default App