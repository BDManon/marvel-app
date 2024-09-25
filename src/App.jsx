import './App.css'
import characters from './data/characters.json'
function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <ul id="characters">
        {characters.map((characters) => (
          <li key={characters.id}>
            {characters.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App