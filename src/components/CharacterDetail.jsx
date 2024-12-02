import { format } from 'date-fns';

const CharacterDetail = ({ character ={} }) => {
    const formattedDate = character.modified ? format(new Date(character.modified), 'MMM dd, yyyy') : 'N/A';
    return (
        <>
            <h2><strong>{character.name}</strong></h2>
            
            { character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} /> }

            <p>{character.description}</p>
            <p>Date de modification : <strong>{formattedDate}</strong></p>
            {/* Add more details here */}
        </>
    );
};

export default CharacterDetail;