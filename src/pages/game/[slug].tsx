import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { client } from "../api/apolloClient";
import { gql } from "@apollo/client";
import { Game } from "../../types/game";
import styled from "styled-components";
import HeroBanner from "../../components/hero-banner/hero-banner";
import Heading from "../../components/heading/heading";
import Paragraph from "../../components/paragraph/paragraph";

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
    <Container>
      <HeroBanner imageSrc={game.banner.url} alt="an image" />
      <ContentContainer>
        <Heading level={1} color={"#fff"}>
          {game.title}
        </Heading>
        <Paragraph color={"#fff"}>{game.description}</Paragraph>
      </ContentContainer>
    </Container>
  );
};
export default GamePage;
