import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import styled from "styled-components";
import { Game } from "../types/game";
import { client } from "./api/apolloClient";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { HeroSlider } from "../components/hero-slider/hero-slider";
import GameSectionSlider from "../components/game-section-slider/game-section-slider";
import Heading from "../components/heading/heading";

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
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

type HomePageProps = {
  games: Game[];
};

const Home = ({ games }: HomePageProps) => {
  const [heroGames, setHeroGames] = useState<Game[]>([]);
  const [arcadeGames, setArcadeGames] = useState<Game[]>([]);
  const [sportsGames, setSportsGames] = useState<Game[]>([]);
  const [adventureGames, setAdventureGames] = useState<Game[]>([]);
  const [platformGames, setPlatformGames] = useState<Game[]>([]);
  useEffect(() => {
    setHeroGames(
      games.filter(
        (game: { heroCarousel: boolean }) => game.heroCarousel === true
      )
    );
    setArcadeGames(
      games.filter((game: { tags: string[] }) => game.tags.includes("arcade"))
    );
    setSportsGames(
      games.filter((game: { tags: string[] }) => game.tags.includes("sport"))
    );
    setAdventureGames(
      games.filter((game: { tags: string[] }) =>
        game.tags.includes("adventure")
      )
    );
    setPlatformGames(
      games.filter((game: { tags: string[] }) =>
        game.tags.includes("platformer")
      )
    );
  }, [games]);
  return (
    <>
      <Container>
        {heroGames && <HeroSlider games={heroGames} />}

        {games && (
          <>
            <Heading level={2} color={"#fff"}>
              Arcade Games
            </Heading>
            <GameSectionSlider games={arcadeGames} />
            <Heading level={2} color={"#fff"}>
              Adventure Games
            </Heading>
            <GameSectionSlider games={adventureGames} />
            <Heading level={2} color={"#fff"}>
              Sports Games
            </Heading>
            <GameSectionSlider games={sportsGames} />
            <Heading level={2} color={"#fff"}>
              Platform Games
            </Heading>
            <GameSectionSlider games={platformGames} />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
