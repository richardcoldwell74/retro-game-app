import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { HeroSlider } from "../components/hero-slider/hero-slider";

export default {
  component: HeroSlider,
  title: "Components/Hero",
} as ComponentMeta<typeof HeroSlider>;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
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
];

export const HeroSliderComponent: ComponentStory<typeof HeroSlider> = () => (
  <Container>
    <HeroSlider games={games} />
  </Container>
);
