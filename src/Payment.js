import React from 'react'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';
import './Payment.css'
import MovieCards from './MovieCards';
import CardElement from './CardElement';
import { useHistory, Link } from 'react-router-dom';

function Payment() {



  const navigate = useHistory();
  const [{seat__array,movie__time,movie__theatre, movie__date,movies, movie__clicked},dispatch] = useStateValue();
  let movie;
  for(var i = 0; i<movies.length;i++){
    if(movies[i].id === parseInt(movie__clicked))
    {
      movie = movies[i];
    }
  }


  function displaySeats(){
   return (
     <div>
   {seat__array.map(element => <span>{element.id} /</span>)}
   </div>
   )
  }
  return (
    <div className='payment'>
    <div className='payment__container'>
        <div className='total__items'>
          Total seats booked: {seat__array.length}
          <br></br>
          <span>Seat number: </span>
          <br></br>
          {displaySeats()}
          <div className='currency__format'>
         <CurrencyFormat
        renderText={(value)=>(
            
            <h3 className="payment__total">Ticket cost: ₹{seat__array.length*100}</h3>
            
        )}
        decimalScale={2}
        value = {3}
        displayType= {"text"}
        thousandSeparator = {true}
        prefix = {"$"}
        /> 
        </div>
        <strong>{movie.title.toUpperCase()}</strong>
        <p>Movie start time: {movie__time}</p>
        <p>Booked at: {movie__date.substring(0,16)}</p>
        <p>Venue: {movie__theatre}</p>
        <div className='movie__des'>

        </div>

       </div>
       
        <div className='movie__details'>
        <MovieCards 
                id = {movie.id}
                image = {movie.image}
                title = {movie.title}
                genre = {movie.genre}
        />
        </div>
      </div>
      <div className='card'>
        <CardElement/>
      </div>
      <div className='payment__buttons'>
        <Link to ='/complete/payment'>
        <button type='submit' className='payment__button'>Pay now</button>
        </Link>
      </div>
      </div>
    
  )
}

export default Payment