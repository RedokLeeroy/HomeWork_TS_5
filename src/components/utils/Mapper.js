export const mapper = data => {
  return data.results.map(
    ({ id, title, overwiev, genre_ids, vote_average, name }) => ({
      id,
      title,
      overwiev,
      genre_ids,
      vote_average,
      name,
    })
  );
};
