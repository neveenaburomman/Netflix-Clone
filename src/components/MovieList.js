import Movie from './Movie';

export default function MovieList(props) {

    


    return (
        <>
      
            <h2>The List Of Movies </h2>

            {
                props.movies.map(each => {
                    
                    return (
                        <>
                            <Movie movie={each}  updateMovies={props.updateMovies} />
                        </>
                    )
                })}
            
        </>
    );}
