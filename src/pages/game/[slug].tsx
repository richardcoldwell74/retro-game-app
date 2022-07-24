import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { gql } from "@apollo/client";
import { Game } from "../../types/game";
import styled from "styled-components";
import HeroBanner from "../../components/hero-banner/hero-banner";
import Heading from "../../components/heading/heading";
import Paragraph from "../../components/paragraph/paragraph";
import { graphQLClient } from "../api/graphQLClient";
import { useSession } from "next-auth/react";
import {
  fetchGame,
  fetchFavourites,
  updateFavourites,
} from "../api/GraphQLQueries";
import { useEffect, useState } from "react";

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 72px;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
`;

const FavouriteSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  color: #fff;
  font-size: 48px;
`;

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const variables = {
    pageSlug,
  };
  const { game } = await graphQLClient.request(fetchGame, variables);

  return {
    props: {
      game: game,
    },
  };
};

const GetFavourites = async (email: string): Promise<string[]> => {
  const { nextUser } = await graphQLClient.request(fetchFavourites, { email });
  const favourites: string[] = nextUser.favourites;
  return favourites;
};

type GamePageProps = {
  game: Game;
};

const GamePage = ({ game }: GamePageProps) => {
  const { data: session, status } = useSession();
  const [favourite, setFavourite] = useState(false);
  useEffect(() => {
    if (session?.user?.email) {
      GetFavourites(session.user.email).then((favourites) => {
        if (favourites.includes(game.title)) {
          setFavourite(true);
        } else {
          setFavourite(false);
        }
      });
    }
  }, [game, favourite]);

  const AddFavourite = async (game: Game, email: string) => {
    const { nextUser } = await graphQLClient.request(fetchFavourites, {
      email,
    });
    let favourites: string[] = nextUser.favourites;
    if (favourites.includes(game.title)) {
      const index = favourites.indexOf(game.title);
      if (index > -1) {
        favourites.splice(index, 1);
      }
    } else {
      favourites.push(game.title);
      var unique = favourites.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
      favourites = unique;
    }
    const variables = { favourites, email };
    const data = await graphQLClient.request(updateFavourites, variables);
    setFavourite(!favourite);
  };

  return (
    <Container>
      <HeroBanner imageSrc={game.banner.url} alt="an image" />
      <ContentContainer>
        <Heading level={1} color={"#fff"}>
          {game.title}
        </Heading>
        <Paragraph color={"#fff"}>{game.description}</Paragraph>
        {session && (
          <FavouriteSelector
            onClick={() => AddFavourite(game, session!.user!.email!)}
          >
            {favourite ? (
              <Icon className="bi bi-check-circle-fill"></Icon>
            ) : (
              <Icon className="bi bi-x-circle-fill"></Icon>
            )}
          </FavouriteSelector>
        )}
      </ContentContainer>
    </Container>
  );
};
export default GamePage;
