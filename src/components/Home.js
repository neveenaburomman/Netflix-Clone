
import React, { useEffect, useState } from "react";
import MovieList from './MovieList';
import "./home.css";

export default function Home() {
    const [movies, setMovie] = useState();
    const getMovies = async () => {

        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
            const data = await response.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    function updateMovies(newMovie, id) {
        let newMovieUpdate = movies.map(movie => {
            if (movie.id === id) {
                movie.comment = newMovie.comment;
                return movie;
            } else {
                return movie;
            }
        })
        setMovie(newMovieUpdate);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <h1 id ="h2"> Welcome To The Movies Page! </h1>
            {
                movies && (<MovieList movies={movies} updateMovies={updateMovies}/>)
            }
            


        </>
    );
}
