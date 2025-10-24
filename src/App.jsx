import { useEffect } from "react"
import './App.css'
import { useDispatch, useSelector } from "react-redux"
import { fetchMultiplePokemonsById } from "./RTK/thunk"

function App() {
  const ditpatch = useDispatch();
  const pokemonData = useSelector(state => state.pokemon);
  console.log(pokemonData);
  useEffect(() => {
    ditpatch(fetchMultiplePokemonsById(151))
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
