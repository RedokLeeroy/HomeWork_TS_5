import { IData } from "../../Interfaces";

export const mapper = (data: { results: Partial<IData>[] }) => {
  return data.results.map(
    ({ id, title, overwiev, genre_ids, vote_average, name }):Partial<IData> => ({
      id,
      title,
      overwiev,
      genre_ids,
      vote_average,
      name,
    })
  );
};
