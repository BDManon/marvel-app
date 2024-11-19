import React, { useState, useEffect } from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
import { DEFAULT_ORDER, DEFAULT_SORT, getCharacters } from '../api/characters-api';
import { useLoaderData } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const CharactersPage = () => {
    document.title = "Marvel App";

    const characters = useLoaderData();

    let [searchParams, setSearchParams]=useSearchParams();

    const [sort, setSort] = useState(searchParams.get('sort') || DEFAULT_SORT);
    const [order, setOrder] = useState(searchParams.get('order') || DEFAULT_ORDER);

    // const [characters, setCharacters] = useState(initialCharacters);
    // const [sort, setSort] = useState('name');
    // const [order, setOrder] = useState('asc');

    React.useEffect(() => {
        setSearchParams({ sort, order });
    }, [sort, order, setSearchParams]);

    return (
        <>
            <h2>Marvel Characters</h2>
            <div>
                <label>
                    Sort by:
                    <select value={sort} data-testid='sort' onChange={(e) => setSort(e.target.value)}>
                        <option value="name">Nom du heros</option>
                        <option value="modified">Date de modification</option>
                    </select>
                </label>
                &nbsp;
                <label>
                    Order:
                    <select value={order} data-testid='order' onChange={(e) => setOrder(e.target.value)}>
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