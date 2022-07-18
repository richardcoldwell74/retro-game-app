import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import styled from "styled-components";
import { Game } from "../types/game";
import { client } from "./api/apolloClient";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { HeroSlider } from "../components/hero-slider/hero-slider";
import GameSectionSlider from "../components/game-section-slider/game-section-slider";

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const StyledHeader = styled.h4`
  color: #fff;
  margin: 0;
  font-size: 16px;
  padding-left: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
    padding-left: 30px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
    padding-left: 40px;
  }
`;

const allGamesQuery = gql`
  query {
    games {
      createdAt
      id
      title
      publisher
      yearPublished
      description
      favourite
      slug
      tags
      heroCarousel
      thumbnail {
        url
      }
      banner {
        url
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: allGamesQuery,
  });
  const games: Game[] = data.games;
  return {
    props: {
      games: games,
    },
    revalidate: 1, // In seconds
  };
};

const Home = ({ games }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [heroGames, setHeroGames] = useState<Game[]>([]);
  useEffect(() => {
    console.log(games);
    setHeroGames(
      games.filter(
        (game: { heroCarousel: boolean }) => game.heroCarousel === true
      )
    );
    console.log(heroGames);
  }, [games]);
  return (
    <>
      <Container>
        {heroGames && <HeroSlider games={heroGames} />}

        {games && (
          <>
            <StyledHeader>Arcade Games</StyledHeader>
            <GameSectionSlider games={games} />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
