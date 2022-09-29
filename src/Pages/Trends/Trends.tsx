
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { fetchTrendings } from "../../Service/Service";
import { mapper } from "../../components/utils/Mapper";
import { Links } from "../../components/Links/Links";
import React from "react";
import { IData } from "../../Interfaces";

export const Trend = (): JSX.Element => {
  const [trendings, setTrendings] = useState<Partial<IData>[]>([]);

  useEffect(():void => {
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
