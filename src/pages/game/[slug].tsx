import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { gql } from "@apollo/client";
import { Game } from "../../types/game";
import styled from "styled-components";
import HeroBanner from "../../components/hero-banner/hero-banner";
import Heading from "../../components/heading/heading";
import Paragraph from "../../components/paragraph/paragraph";
import { graphQLClient } from "../api/graphQLClient";
import { useSession } from "next-auth/react";

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
  background: #fff;
  color: #000;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const query = gql`
  query ($pageSlug: String!) {
    game(where: { slug: $pageSlug }) {
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

const updateFavourites = gql`
  mutation MyMutation {
    updateNextUser(
      data: { favourites: "testupdate" }
      where: { email: "rich01@gmail.com" }
    ) {
      email
    }
  }
`;

const ToggleFavourite = async (game: Game, email: string) => {
  console.log("toggle favourite", game.id);

  const gameID = game.id;

  const variables = {};

  const data = await graphQLClient.request(updateFavourites, variables);
};

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const variables = {
    pageSlug,
  };
  const { game } = await graphQLClient.request(query, variables);

  return {
    props: {
      game: game,
    },
  };
};

type GamePageProps = {
  game: Game;
};

const GamePage = ({ game }: GamePageProps) => {
  const { data: session, status } = useSession();
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
            onClick={() => ToggleFavourite(game, session!.user!.email!)}
          ></FavouriteSelector>
        )}
      </ContentContainer>
    </Container>
  );
};
export default GamePage;
