import { render } from "@testing-library/react";
import Heading from "./heading";

describe("Heading", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Heading color={"#fff"} level={1}>
        I am a Heading
      </Heading>
    );
    expect(baseElement).toBeTruthy();
  });
});
