import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { GameSectionSlider } from "../components/game-section-slider/game-section-slider";

export default {
  component: GameSectionSlider,
  title: "Components/GameSectionSlider",
} as ComponentMeta<typeof GameSectionSlider>;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  /* display: block; */
  padding: 0 calc(3.5vw + 5px);
`;

const games = [
  {
    createdAt: "",
    id: "",
    title: "Green Beret",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "green-beret",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/bohnz0MOTGiG39l382Fh" },
    banner: { url: "https://media.graphassets.com/TCRh691TuE9AM58lYygm" },
  },
  {
    createdAt: "",
    id: "",
    title: "Wizball",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "wizball",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/NpGJ3c85Rgq0Y99vDYTs" },
    banner: { url: "https://media.graphassets.com/LH7k4CXiRbu4DTXFsagm" },
  },
  {
    createdAt: "",
    id: "",
    title: "Exolon",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "exolon",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/71XLiXVS1fQaPDlSV1Bw" },
    banner: { url: "https://media.graphassets.com/255s4DOSAWi9DYsl7tzP" },
  },
  {
    createdAt: "",
    id: "",
    title: "Wizball",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "wizball",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/NpGJ3c85Rgq0Y99vDYTs" },
    banner: { url: "https://media.graphassets.com/LH7k4CXiRbu4DTXFsagm" },
  },
  {
    createdAt: "",
    id: "",
    title: "Wizball",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "wizball",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/NpGJ3c85Rgq0Y99vDYTs" },
    banner: { url: "https://media.graphassets.com/LH7k4CXiRbu4DTXFsagm" },
  },
  {
    createdAt: "",
    id: "",
    title: "Wizball",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "wizball",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/NpGJ3c85Rgq0Y99vDYTs" },
    banner: { url: "https://media.graphassets.com/LH7k4CXiRbu4DTXFsagm" },
  },
  {
    createdAt: "",
    id: "",
    title: "Wizball",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "wizball",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/NpGJ3c85Rgq0Y99vDYTs" },
    banner: { url: "https://media.graphassets.com/LH7k4CXiRbu4DTXFsagm" },
  },
  {
    createdAt: "",
    id: "",
    title: "Wizball",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "wizball",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/NpGJ3c85Rgq0Y99vDYTs" },
    banner: { url: "https://media.graphassets.com/LH7k4CXiRbu4DTXFsagm" },
  },
];

export const GameSectionSliderComponent: ComponentStory<
  typeof GameSectionSlider
> = () => (
  <Container>
    <GameSectionSlider games={games} />
  </Container>
);
