//affiche la page de détail d'un personnage, qui elle-même utilise un composant CharacterDetail pour afficher les détails du personnages.
import React from 'react';
import CharacterDetail from '../components/CharacterDetail';
import { useLoaderData } from 'react-router';
import D3PieChart from '../components/D3PieChart';
import RechartsPieChart from '../components/RechartsPieChart';

const CharacterDetailPage = () => {
    const character = useLoaderData();
    if (!character) {

        return <div>loading...</div>;

    }
    return (
        <>
             {character ? <CharacterDetail character={character}/> : 'loading...'} {/* affiche le composant CharacterDetail si le personnage est chargé, sinon affiche "loading..." */}
             <h2>Capacities</h2>
            <div style={{ display: 'flex'}}>
                <div style={{flex: '60%'}}>
                    <h3>Using D3</h3>
                    <D3PieChart data={character.capacities} />
                </div>
                <div style={{flex: '50%'}}>
                    <h3>Using Recharts</h3>
                    <RechartsPieChart data={character.capacities} />
                </div>
            </div>
        </>
    );
};

export default CharacterDetailPage;