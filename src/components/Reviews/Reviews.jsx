import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "Service/Service";

export const Reviews = () => {

   const [reviews, setReviews] = useState()
    const {movieId} = useParams();
          useEffect(() =>{

    fetchReviews(movieId).then(({data}) => setReviews(data))
  },[movieId])

    return ( <>{reviews && <ul>
        {reviews.results && reviews.results.length > 0 ? (
          reviews.results.map(el => (
            <li key={el.id}>
              <div>
                <b>{el.author}:</b>
                <p>{el.content}</p>
              </div>
            </li>
          ))
        ) : (
          <b>No reviews yet!</b>
        )}
      </ul>}</>
       )
}