import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export function CharactersList({characters = []}) {
    return (
    <ul id="characters">
        {characters.map((character) => {
            const formattedDate = character.modified ? format(new Date(character.modified), 'MMM dd, yyyy') : 'N/A';
            return (
                <li key={character.id}> 
                    <Link to={`/characters/${character.id}`}> 
                    <strong>{character.name}</strong> - <small>{formattedDate}</small>
                    </Link>
                </li>
            );
        })}
    </ul>)
}