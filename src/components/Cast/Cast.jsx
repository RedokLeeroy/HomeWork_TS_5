import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCredits } from "Service/Service";

export const Cast = () => {
   const [credits, setCredits] = useState()
    const {movieId} = useParams();
          useEffect(() =>{

    fetchCredits(movieId).then(({data}) => setCredits(data))
  },[movieId])

    return (<>{ credits && <ul>
      {credits.cast && credits.cast.length > 0 ? (
        credits.cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
              }
              alt={name}
              
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))
      ) : (
        <b>Nothing was found!</b>
      )}
    </ul> }</>)

} 