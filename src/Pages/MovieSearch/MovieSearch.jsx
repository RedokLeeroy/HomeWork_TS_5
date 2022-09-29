import { useEffect, useState } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "Service/Service";
import { mapper } from "components/utils/Mapper";
import { Links } from "components/Links/Links";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { GoHomePage } from "components/GoHomePage/GoHomePage";

export const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchData, setSearchData] = useState(null);
  const searchRequest = searchParams.get("q") ?? "";

  useEffect(() => {
    if (!searchRequest) {
      return;
    }
    fetchSearchMovies(searchRequest).then(({ data }) =>
      setSearchData(mapper(data))
    );
  }, [searchRequest]);

  const handleSubmit = (search) => {
    if (!search) {
      toast.error("Input some Text");
      return;
    }
    setSearchParams({ q: search });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      {searchData && (
        <>
          {searchData.length === 0 ? (
            <>
              <GoHomePage />
            </>
          ) : (
            <ul>
              {searchData.map(({ id, title, name }) => {
                return (
                  <Links
                    key={nanoid()}
                    id={id}
                    title={title}
                    name={name}
                  ></Links>
                );
              })}
            </ul>
          )}
        </>
      )}
    </>
  );
};
