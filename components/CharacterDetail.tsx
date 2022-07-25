import React, { useEffect, useState } from "react";
import { Character, Comic } from "../interfaces";
import { Container, Main, Title, Button } from "../styles/shared";
import { ComicWrapper } from "../styles/cards";
import { Detail } from "../styles/cards";
import { getComics } from "../services";
import Table from "../components/Table";
import ComicCard from "./ComicCard";

type CharacterDetailProps = {
  data: Character;
};

const CharacterDetail = ({ data: charachter }: CharacterDetailProps) => {
  const { id, name, description, thumbnail, urls, series, stories } =
    charachter;
  const [comics, setComics] = useState<Comic[]>();
  const [more, setMore] = useState(false);
  useEffect(() => {
    getComics(id).then((res) => {
      setComics(res.results);
    });
  }, []);

  return (
    <>
      <Detail background={`${thumbnail.path}/detail.jpg`}>
        <Container>
          <div className="content">
            <h1>{name}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  description ||
                  "Unfortunately, there is no description of the character.",
              }}
            />
            <h3>Useful Links</h3>
            {urls.map((item) => (
              <a
                key={item.type}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.type}
              </a>
            ))}
          </div>
        </Container>
      </Detail>
      <Main>
        <Container>
          <Title>Comics List</Title>
          <ComicWrapper
            length={
              (comics && comics.length < 8 ? 7 : comics && comics.length) || 20
            }
          >
            {comics &&
              comics.map((item: Comic) => {
                return <ComicCard data={item} key={item.title} />;
              })}
          </ComicWrapper>
        </Container>
        <Container>
          {more ? (
            <>
              <br />
              <Title>More Information</Title>
              <Table
                headers={["Stories"]}
                body={stories.items.map((item, i) => {
                  return [i + 1, item.name];
                })}
              />
              <Table
                headers={["Series"]}
                body={series.items.map((item, i) => {
                  return [i + 1, item.name];
                })}
              />
            </>
          ) : (
            <Button onClick={() => setMore(true)}>
              <span>Show more infortmation</span>
            </Button>
          )}
        </Container>
      </Main>
    </>
  );
};

export default CharacterDetail;
