import React, { useState, useEffect } from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
import { getCharacters } from '../api/characters-api';
import { useLoaderData, useNavigate } from 'react-router';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    const navigate = useNavigate();
    const characters = useLoaderData();

    const [sort, setSort] = useState('name');
    const [order, setOrder] = useState('asc');

    useEffect(() => {
        navigate(`/?sort=${sort}&order=${order}`);
    }, [sort, order, navigate]);

    return (
        <>
            <h2>Marvel Characters</h2>
            <div>
                <label htmlFor="sort">Sort by: </label>
                <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="modified">Modified</option>
                </select>
                <label htmlFor="order">Order: </label>
                <select id="order" value={order} onChange={(e) => setOrder(e.target.value)}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;