import { gql } from "graphql-request";

export const fetchAllGames = gql`
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

export const fetchGame = gql`
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

export const fetchFavourites = gql`
  query FetchFavourites($email: String!) {
    nextUser(where: { email: $email }) {
      email
      favourites
    }
  }
`;

export const updateFavourites = gql`
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