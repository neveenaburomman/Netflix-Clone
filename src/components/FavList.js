import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import {useEffect, useState} from 'react';


export default function FavList(){

    const [favListData, setFavListData] = useState();

    async function getDataFromDB(){
       const response = await fetch(`${process.env.REACT_APP_SERVER}/favorite`);
       const data = await response.json();
       setFavListData(data);
     }
     useEffect(() => {
       getDataFromDB();
     }, []);

   
   async function handleDelete(id){
        const response = await fetch(`${process.env.REACT_APP_SERVER}/DELETE//${id}`,{
            method: 'DELETE',
        });
        
        if(response.status === 204){
            getDataFromDB();
            Swal.fire(
                'It is done!',
                'Movie Deleted Successfully',
                'success'
              )
        }
    }
 return (
     <>
     <h2>The List Of Favorite Movies</h2>
     {
         favListData && favListData.map(movie =>{
             return (
                 <>
                   <div className='Fav' >
                   <Card style={{ width: '18rem' }} key={movie.id}>
                                <Card.Img variant="top" src={movie.image} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.overview} </Card.Text>
                                    <Card.Text>{movie.release_date} </Card.Text>
                                    <Card.Text>
                                        {movie.comment ? movie.comment : "No Comment is Added"}
                                    </Card.Text>

                                    <Button variant="primary" onClick={()=>{handleDelete(movie.id)}}>Delete</Button>
                                </Card.Body>
                            </Card>
                            </div>
                 </>
             )
         })
     }
     </>
 )
}

 