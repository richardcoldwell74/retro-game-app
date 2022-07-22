import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import styled from "styled-components";
import { Game } from "../types/game";
import { client } from "./api/apolloClient";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import GameTile from "../components/game-tile/game-tile";

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const GameTileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    revalidate: 90, // In seconds
  };
};

const Favourites = ({
  games,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  useEffect(() => {
    setFilteredGames(
      games.filter((game: { title: string; tags: string[] }) =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    if (searchQuery === "") {
      setFilteredGames(games);
    }
  }, [searchQuery, games]);

  return (
    <Container>
      <GameTileContainer>
        {filteredGames &&
          filteredGames.map((game: Game, i: number) => (
            <GameTile
              key={i}
              href={"game/" + game.slug}
              imageSrc={game.thumbnail.url}
              alt={game.title}
            />
          ))}
      </GameTileContainer>
    </Container>
  );
};

export default Favourites;
