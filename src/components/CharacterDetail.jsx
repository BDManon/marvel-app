const CharacterDetail = ({ character ={} }) => {
    return (
        <>
            <h2>{character.name}</h2>
            
            { character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} /> }

            <p>{character.description}</p>
            <p>Date de modification : {character.modified}</p>
            {/* Add more details here */}
        </>
    );
};

export default CharacterDetail;