import { Links } from "components/Links/Links";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { fetchTrendings } from "Service/Service";
import { mapper } from "components/utils/Mapper";

export const Trend = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    fetchTrendings().then(({ data }) => setTrendings(mapper(data)));
  }, []);

  return (
    <>
      <h2>Trend Films</h2>
      <ul>
        {trendings.map(({ id, title, name }) => {
          return (
            <Links key={nanoid()} id={id} title={title} name={name}></Links>
          );
        })}
      </ul>
    </>
  );
};
