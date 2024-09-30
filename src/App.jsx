import './App.css'
import { CharactersList } from './components/CharactersList'
import { NumberOfCharacters } from './components/NumberOfCharacters'
import characters from './data/characters.json'


function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <CharactersList  />
      <NumberOfCharacters  />
      
    </>
  )
}

export default App
