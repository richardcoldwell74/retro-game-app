import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import styled from "styled-components";
import { Game } from "../types/game";
import { useEffect, useState } from "react";
import GameTile from "../components/game-tile/game-tile";
import { graphQLClient } from "./api/graphQLClient";
import { fetchAllGames, fetchFavourites } from "./api/GraphQLQueries";
import { useSession } from "next-auth/react";

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

export const getStaticProps: GetStaticProps = async () => {
  const { games } = await graphQLClient.request(fetchAllGames);

  return {
    props: {
      games: games,
    },
    revalidate: 90, // In seconds
  };
};

const GetFavourites = async (email: string): Promise<string[]> => {
  const { nextUser } = await graphQLClient.request(fetchFavourites, { email });
  const favourites: string[] = nextUser.favourites;
  return favourites;
};

const Favourites = ({
  games,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: session } = useSession();
  const [favouriteGameNames, setFavouriteGameNames] = useState<string[]>([]);
  const [favouriteGames, setFavouriteGames] = useState<Game[]>([]);
  useEffect(() => {
    if (session?.user?.email) {
      GetFavourites(session.user.email).then((favourites) =>
        setFavouriteGameNames(favourites)
      );
    } else {
      setFavouriteGameNames([]);
    }
  }, [games]);

  useEffect(() => {
    setFavouriteGames(
      games.filter((game: Game) => {
        return favouriteGameNames.includes(game.title);
      })
    );
  }, [favouriteGameNames]);

  return (
    <Container>
      <GameTileContainer>
        {favouriteGames &&
          favouriteGames.map((game: Game, i: number) => (
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
