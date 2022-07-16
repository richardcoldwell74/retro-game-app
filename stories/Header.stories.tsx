import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Header } from "../components/header/header";

export default {
  component: Header,
  title: "Components/Header",
} as ComponentMeta<typeof Header>;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  /* display: block; */
  padding: 0 calc(3.5vw + 5px);
`;

export const SpectrumHeader: ComponentStory<typeof Header> = () => <Header />;
