import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GameTile } from "../components/game-tile/game-tile";

export default {
  component: GameTile,
  title: "Components/GameTiles",
} as ComponentMeta<typeof GameTile>;

const url = "https://media.graphassets.com/bohnz0MOTGiG39l382Fh";

export const GameTileComponent: ComponentStory<typeof GameTile> = () => (
  <GameTile imageSrc={url} alt="an image" href="" />
);
