import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    const baseUrl = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, []);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {
                    movies.map(movie => {
                        return (((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (<img className={`row_poster ${isLargeRow && 'row_posterLarge'}`} key={movie.id} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />));
                    })
                }
            </div>
        </div>
    );
}

export default Row;