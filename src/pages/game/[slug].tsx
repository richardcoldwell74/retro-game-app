import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { client } from "../api/apolloClient";
import { gql } from "@apollo/client";
import { Game } from "../../types/game";
import styled from "styled-components";

const StyledText = styled.p`
  color: #fff;
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

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const variables = {
    pageSlug,
  };

  const { data } = await client.query({
    query: query,
    variables: variables,
  });
  const game: Game = data.game;
  return {
    props: {
      game: game,
    },
  };
};

const GamePage = ({
  game,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <StyledText>{game.title}</StyledText>
    </>
  );
};
export default GamePage;
