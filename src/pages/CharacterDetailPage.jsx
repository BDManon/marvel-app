//affiche la page de détail d'un personnage, qui elle-même utilise un composant CharacterDetail pour afficher les détails du personnages.
import React from 'react';
import CharacterDetail from '../components/CharacterDetail';
import { useLoaderData } from 'react-router';

const CharacterDetailPage = () => {
    const character = useLoaderData();
    return (
        <>
             {character ? <CharacterDetail character={character}/> : 'loading...'} {/* affiche le composant CharacterDetail si le personnage est chargé, sinon affiche "loading..." */}
        </>
    );
};

export default CharacterDetailPage;