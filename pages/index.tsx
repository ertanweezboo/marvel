import React, { FC } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useLocalstorageState } from "rooks";
import { getCharacters } from "../services";
import { Container, Main, Title, Button } from "../styles/shared";
import { Data } from "../interfaces";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FeaturedCharacters from "../components/FeaturedCharacters";
import FavoritesCharacters from "../components/FavoritesCharacters";

const IndexPage: FC<Data> = ({ data }: Data) => {
  const [value] = useLocalstorageState("my-favorites", null);
  return (
    <Layout>
      <HeroBanner
        title="Groot"
        button={{ url: "/characters/1010743/", label: "LEARN MORE" }}
        description="Groot is a fictional character appearing in American comic books published by Marvel Comics."
        background="https://terrigen-cdn-dev.marvel.com/content/prod/1x/iamgroot_com_mas_dsk_01.jpg"
      />
      <Main>
        <Container>
          <Title>FEATURED CHARACTERS</Title>
          <FeaturedCharacters />
          <br />
          <Title>YOUR FAVORITE MARVEL CHARACTERS</Title>
          <FavoritesCharacters />
          <br />
          <p>
            Total <strong>{data.total}</strong> characters found.
          </p>
          <Link href="/characters">
            <Button>
              <span>Discover All Characters</span>
            </Button>
          </Link>
        </Container>
      </Main>
    </Layout>
  );
};

export default IndexPage;

// Fetch data at build time
export const getStaticProps: GetStaticProps = async () => {
  const res: Data = await getCharacters(0);
  return {
    props: {
      data: res,
    },
  };
};
