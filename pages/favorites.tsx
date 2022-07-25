import React, { FC } from "react";
import { Container, Main, Title } from "../styles/shared";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FavoritesCharacters from "../components/FavoritesCharacters";

const FavoritesPage: FC = () => {
  return (
    <Layout>
      <HeroBanner
        title="YOUR FAVORITE MARVEL CHARACTERS"
        description="Manage easyly."
        background="https://terrigen-cdn-dev.marvel.com/content/prod/1x/characters_art_mas_mob_01.jpg"
      />
      <Main>
        <Container>
          <Title>YOUR FAVORITE MARVEL CHARACTERS</Title>
          <FavoritesCharacters slice={18} />
        </Container>
      </Main>
    </Layout>
  );
};

export default FavoritesPage;
