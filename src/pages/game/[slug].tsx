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

const fetchFavourites = gql`
  query FetchFavourites($email: String!) {
    nextUser(where: { email: $email }) {
      email
      favourites
    }
  }
`;

const updateFavourites = gql`
  mutation MyMutation($favourites: [String!], $email: String!) {
    updateNextUser(
      data: { favourites: $favourites }
      where: { email: $email }
    ) {
      email
      favourites
    }
    publishNextUser(where: { email: $email }) {
      id
    }
  }
`;

const AddFavourite = async (game: Game, email: string) => {
  const { nextUser } = await graphQLClient.request(fetchFavourites, { email });
  let favourites: string[] = nextUser.favourites;
  favourites.push(game.title);
  var unique = favourites.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });
  favourites = unique;
  const variables = { favourites, email };
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
            onClick={() => AddFavourite(game, session!.user!.email!)}
          ></FavouriteSelector>
        )}
      </ContentContainer>
    </Container>
  );
};
export default GamePage;
