import { render } from "@testing-library/react";

import HeroBanner from "./hero-banner";

describe("HeroBannerComponent", () => {
  const url = "https://media.graphassets.com/FNpB42YROaqU0YMbONwD";
  it("should render successfully", () => {
    const { baseElement } = render(<HeroBanner imageSrc={url} alt="image" />);
    expect(baseElement).toBeTruthy();
  });
});
