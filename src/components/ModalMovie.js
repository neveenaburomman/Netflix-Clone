import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { Card } from 'react-bootstrap';





export default function ModalMovie(props) {

    const commentRef = useRef();

    function handleComment(event) {

        event.preventDefault();
        const comment = commentRef.current.value;
        const newMovie = { ...props.chosenmovie, comment };
        

        props.updateMovies(newMovie, props.chosenmovie.id);
    }
   async function handleAddFav(event, movie){
        event.preventDefault();

       const dataToBeSent = {
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview : movie.overview ,
        comment: movie.comment
       }

       const url = `${process.env.REACT_APP_SERVER}/addFavMovies`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToBeSent)
        })
        const data = await response.json();
        console.log(response.status);
        console.log(data);
        
   }

    

    return (
        <>
                <Modal show={props.show} onHide={props.ModalMoviehandleClose}>
                <Modal.Header closeButton>
                <Modal.Body>{props.chosenmovie.title}</Modal.Body>
                 
                </Modal.Header>

                <Modal.Body>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.chosenmovie.poster_path}`} />
                    <p>User Comments : {props.chosenmovie.comment}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted"></Form.Text>
                        
                        </Form.Group>
                        <Card.Text>
                                {props.chosenMovie.comment ? props.chosenMovie.comment : "No Comment is Added"}
                        </Card.Text>
                        
                        <Button variant="primary" type="submit"  onClick={(event)=>{handleAddFav(event,props.chosenmovie)}}>
                            AddFav
                        </Button>

                        <Button variant="primary" type="submit" onClick={handleComment}>
                         Comment
                        </Button>
                        </Form>
                    
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    

                </Modal.Footer>

            </Modal>
        </>
    )}
