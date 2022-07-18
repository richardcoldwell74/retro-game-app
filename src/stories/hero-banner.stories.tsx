import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HeroBanner } from "../components/hero-banner/hero-banner";

export default {
  component: HeroBanner,
  title: "Components/HeroBanner",
} as ComponentMeta<typeof HeroBanner>;

const url = "https://media.graphassets.com/FNpB42YROaqU0YMbONwD";

export const GameTileComponent: ComponentStory<typeof HeroBanner> = () => (
  <HeroBanner imageSrc={url} alt="an image" />
);
