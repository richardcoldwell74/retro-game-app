import { render } from "@testing-library/react";

import GameTile from "./game-tile";

describe("GameTileComponent", () => {
  const url = "https://media.graphassets.com/bohnz0MOTGiG39l382Fh";
  it("should render successfully", () => {
    const { baseElement } = render(
      <GameTile imageSrc={url} alt="image" href="" />
    );
    expect(baseElement).toBeTruthy();
  });
});
