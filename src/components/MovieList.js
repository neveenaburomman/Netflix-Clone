import Movie from './Movie';



export default function MovieList(props) {

    return (
        <>
            <h1>The List Of Movies </h1>

            {
                props.movies.map(each => {
                    return (
                        <>
                            <Movie movie={each} />
                        </>
                    )
                })}
            
        </>
    );}
