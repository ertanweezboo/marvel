import React, { FC, useState } from "react";
import { getCharacters } from "../../services";
import { Container, Main, Title } from "../../styles/shared";
import { Data, Character } from "../../interfaces";
import { CardWrapper } from "../../styles/cards";
import Layout from "../../components/Layout";
import HeroBanner from "../../components/HeroBanner";
import CharacterCard from "../../components/CharacterCard";
import Pagination from "../../components/Pagination";

const CharacterPage: FC<Data> = ({ data }: Data) => {
  const { results } = data;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(96);

  const paginate = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const title = "MARVEL CHARACTERS";
  const description =
    "Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!";

  return (
    <Layout title={title} description={description}>
      <HeroBanner
        title={title}
        description={description}
        background="https://terrigen-cdn-dev.marvel.com/content/prod/1x/characters_art_mas_mob_01.jpg"
      />
      <Main>
        <Container>
          <div>
            <Title>{title}</Title>
            <p>
              Total <strong>{data.total}</strong> characters found.
            </p>
          </div>
          <CardWrapper>
            {results.map((item: Character) => {
              return <CharacterCard key={item.id} data={item} />;
            })}
          </CardWrapper>

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.total}
            paginate={paginate}
          />
        </Container>
      </Main>
    </Layout>
  );
};

export default CharacterPage;

// Fetch data at build time
export async function getServerSideProps({ query }) {
  const page = query.page;
  const offset = 96 * page;
  const res: Data = await getCharacters(offset, 96);

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: res,
    },
  };
}
