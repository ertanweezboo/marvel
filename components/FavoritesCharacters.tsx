import React, { useEffect, useState } from "react";
import { useLocalstorageState } from "rooks";
import { Character, Data } from "../interfaces";
import { CardWrapper } from "../styles/cards";
import { getCharacter } from "../services";
import CharacterCard from "./CharacterCard";
import Spinner from "../styles/spinner";

type Props = {
  slice?: number;
};

const FavoritesCharacters = (slice?: Props) => {
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<any>();
  const [value] = useLocalstorageState("my-favorites", null);

  useEffect(() => {
    if (value) {
      setLoading(true);
      const newArr = JSON.parse(JSON.stringify(value)).map(
        (i: { id: number }) => {
          return i.id;
        }
      );
      const fetchUserInfo = async (ids: number[]) => {
        const requests = ids.map(async (id) => {
          const a: Data = await getCharacter(id);
          return a;
        });
        return Promise.all(requests);
      };

      fetchUserInfo(newArr).then((res) => {
        setResults(res);
        setLoading(false);
      });
    }
  }, []);
  if (!value) return <p>Favorites characters list is empty</p>;
  if (isLoading) return <Spinner />;
  return (
    <CardWrapper>
      {results &&
        results.map((item: { results: Character[] }) => {
          return (
            <CharacterCard key={item.results[0].id} data={item.results[0]} />
          );
        })}
    </CardWrapper>
  );
};

export default FavoritesCharacters;
