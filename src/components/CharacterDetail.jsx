import { format } from 'date-fns';

const CharacterDetail = ({ character ={} }) => {
    const formattedDate = format(new Date(character.modified), 'MMM dd, yyyy');
    return (
        <>
            <h2>{character.name}</h2>
            
            { character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} /> }

            <p>{character.description}</p>
            <p>Date de modification : <small><strong>{formattedDate}</strong></small></p>
            {/* Add more details here */}
        </>
    );
};

export default CharacterDetail;