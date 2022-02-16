
import React, { useEffect, useState } from "react";
import MovieList from './MovieList';


export default function Home() {
    const [movie, setMovie] = useState();
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

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <h2>Welcome To The Home Page!</h2>
            {
                movie && (<MovieList movies={movie} />)
            }


        </>
    );
}
