import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "../components/heading/heading";

export default {
  component: Heading,
  title: "Components/Heading",
} as ComponentMeta<typeof Heading>;

const url = "https://media.graphassets.com/bohnz0MOTGiG39l382Fh";

export const HeadingComponent: ComponentStory<typeof Heading> = () => (
  <>
    <Heading color={"#fff"} level={1}>
      H1 heading
    </Heading>
    <Heading color={"#fff"} level={2}>
      H2 heading
    </Heading>
    <Heading color={"#fff"} level={3}>
      H3 heading
    </Heading>
    <Heading color={"#fff"} level={4}>
      H4 heading
    </Heading>
    <Heading color={"#fff"} level={5}>
      H5 heading
    </Heading>
    <Heading color={"#fff"} level={6}>
      H6 heading
    </Heading>
  </>
);
