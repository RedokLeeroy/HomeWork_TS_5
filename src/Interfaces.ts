export interface IData {
id: number,
 title:string,
 overwiev:string,
 genre_ids:string[],
 vote_average:number,
 name:string,
 poster_path: string,
 original_title:string,
 overview: string,
 genres: {id:number, name: string}[]
}
export interface ICast {
 id:number,
 profile_path: string, 
 name:string, 
 character:string
}