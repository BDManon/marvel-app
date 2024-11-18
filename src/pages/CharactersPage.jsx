import React, { useState, useEffect } from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
import { getCharacters } from '../api/characters-api';
import { useLoaderData } from 'react-router';

const CharactersPage = () => {
    document.title = "Marvel App";

    const initialCharacters = useLoaderData();
    const [characters, setCharacters] = useState(initialCharacters);
    const [sort, setSort] = useState('name');
    const [order, setOrder] = useState('asc');

    useEffect(() => {
        const sortedCharacters = getCharacters({ sort, order });
        setCharacters(sortedCharacters);
    }, [sort, order]);

    return (
        <>
            <h2>Marvel Characters</h2>
            <div>
                <label>
                    Sort by:
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="name">Nom du heros</option>
                        <option value="modified">Date de modification</option>
                    </select>
                </label>
                <label>
                    Order:
                    <select value={order} onChange={(e) => setOrder(e.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;