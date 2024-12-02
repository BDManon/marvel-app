import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export function CharactersList({characters = []}) {
    return (
    <ul id="characters">
        {characters.map((character) => {
            const formattedDate = format(new Date(character.modified), 'MMM dd, yyyy');
            return (
                <li key={character.id}> 
                    <Link to={`/characters/${character.id}`}> 
                        {character.name} (<small><strong>{formattedDate}</strong></small>)
                    </Link>
                </li>
            );
        })}
    </ul>)
}