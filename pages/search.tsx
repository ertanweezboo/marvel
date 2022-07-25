import React, { FC, useEffect, useState } from "react";
import { searchCharacter } from "../services";
import { Container, Main, Title, Input, Search } from "../styles/shared";
import { Character } from "../interfaces";
import { CardWrapper } from "../styles/cards";
import Layout from "../components/Layout";
import CharacterCard from "../components/CharacterCard";
import Spinner from "../styles/spinner";

const SearchPage: FC = () => {
  const [results, setResults] = useState<Character[]>();
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLoading(true);
    setFormData(e.currentTarget.value);
  };

  useEffect(() => {
    if (formData.length >= 3) {
      searchCharacter(formData).then((result) => {
        setResults(result);
        setLoading(false);
      });
    }
  }, [formData]);

  return (
    <Layout>
      <Main>
        <Container>
          <Title>SEARCH CHARACTERS</Title>
          <Search>
            <Input
              type="text"
              value={formData}
              onChange={onChange}
              name="search"
              placeholder="Search Marvel Character"
            />
            <span>You must enter at least 3 characters.</span>

            {isLoading && formData.length >= 3 && <Spinner />}

            {results && results.length === 0 && (
              <h3>
                No results were found for the <strong>{formData}</strong>{" "}
                search!
              </h3>
            )}

            <CardWrapper>
              {!isLoading &&
                results &&
                results.map((item: Character) => {
                  return <CharacterCard key={item.id} data={item} />;
                })}
            </CardWrapper>
          </Search>
        </Container>
      </Main>
    </Layout>
  );
};

export default SearchPage;
