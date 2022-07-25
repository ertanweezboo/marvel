import React, { useEffect, useState } from "react";
import { Character, Data } from "../interfaces";
import { CardWrapper } from "../styles/cards";
import { getCharacter } from "../services";
import CharacterCard from "./CharacterCard";
import Spinner from "../styles/spinner";

const FeaturedCharacters = () => {
  const [isLoading, setLoading] = useState(true);
  const [results, setResults] = useState<any>();

  //That section will be come from some API.
  const FeaturedList = [1009610, 1009664, 1009368, 1009351, 1009220, 1009282];

  useEffect(() => {
    const fetchUserInfo = async (ids: number[]) => {
      const requests = ids.map(async (id) => {
        const a: Data = await getCharacter(id);
        return a;
      });
      return Promise.all(requests);
    };

    fetchUserInfo(FeaturedList).then((result) => {
      setResults(result);
      setLoading(false)
    });
  }, []);
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

export default FeaturedCharacters;
