import { CharactersList } from '../components/CharactersList'
import { NumberOfCharacters } from '../components/NumberOfCharacters'
import characters from '../data/characters.json'



export default function CharactersPage() {

    document.title = "About Us | Marvel Characters"
      return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList  characters={characters}/>
            <NumberOfCharacters  characters={characters}/>
        </>
      );
    }
  



// AUTRE VERSION

// const CharactersPage = () => {

//     document.title = "Marvel Characters"
//       return (
//         <>
//             <h1>Marvel Characters</h1>
//             <CharactersList  characters={characters}/>
//             <NumberOfCharacters  characters={characters}/>
//         </>
//       );
//     }

// export default CharactersPage;
