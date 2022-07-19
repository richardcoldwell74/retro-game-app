import { render } from "@testing-library/react";
import Paragraph from "./paragraph";

describe("ParagraphComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Paragraph color={"#fff"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pretium quam
        vulputate dignissim suspendisse in est. Magna sit amet purus gravida
        quis blandit turpis cursus in. Nulla pellentesque dignissim enim sit
        amet venenatis urna cursus. Felis donec et odio pellentesque diam. Lorem
        ipsum dolor sit amet. Egestas integer eget aliquet nibh praesent.
        Porttitor eget dolor morbi non arcu risus. Eu augue ut lectus arcu.
        Ullamcorper velit sed ullamcorper morbi. Nisl nunc mi ipsum faucibus
        vitae. Tellus id interdum velit laoreet id donec ultrices tincidunt.
        Aliquet enim tortor at auctor. Tellus molestie nunc non blandit massa
        enim nec. Bibendum at varius vel pharetra vel turpis nunc eget lorem.
        Vestibulum sed arcu non odio.
      </Paragraph>
    );
    expect(baseElement).toBeTruthy();
  });
});
