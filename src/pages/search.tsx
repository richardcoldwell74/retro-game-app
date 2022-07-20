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

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GameTileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledInput = styled.input`
  margin-top: 20px ;
  background: linear-gradient(
    180deg,
    rgba(51, 53, 61, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: #f9f9f9;
  width: 60vw;
  height: 79px;
  font-weight: 800;
  font-size: 30px;
  padding-left: 30px;
  border: 0;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  min-width 300px
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

const Search = ({ games }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  useEffect(() => {
    setFilteredGames(
      games.filter((game: { title: string; tags: string[] }) =>
        game.title.toLowerCase().includes(searchQuery)
      )
    );
    if (searchQuery === "") {
      setFilteredGames(games);
    }
  }, [searchQuery, games]);

  return (
    <Container>
      <StyledInputContainer>
        <StyledInput
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Title"
        />
      </StyledInputContainer>
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

export default Search;
