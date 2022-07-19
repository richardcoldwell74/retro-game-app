import styled from "styled-components";
import { GameTileImage } from ".//game-tile-image/game-tile-image";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  background-color: black;
  margin: 15px;
  width: calc(25vw - 3vw);
  height: auto;
  overflow: hidden;
  backface-visibility: hidden;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  display: block;
  position: relative;
  transform: scale(1, 1) translateZ(0px);
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  -webkit-font-smoothing: subpixel-antialiased;
  &:after {
    border-radius: 4px;
    inset: 0px;
    content: "";
    position: absolute;
    transition: border 300ms ease-out 0s;
    border: 4px solid rgba(49, 49, 49, 0.8);
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px);
    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    &:after {
      border: 4px solid rgba(255, 255, 255, 0.9);
    }
  }

  @media (max-width: 1024px) {
    width: calc(31vw - 3vw);
  }
  @media (max-width: 768px) {
    width: calc(46vw - 3vw);
  }
  @media (max-width: 640px) {
    width: calc(88vw - 3vw);
  }
`;

export interface GameTileProps {
  imageSrc: string;
  alt: string;
  href: string;
}

export const GameTile = ({ imageSrc, alt, href }: GameTileProps) => {
  return (
    <Link href={href}>
      <a>
        <Container>
          <GameTileImage imageSrc={imageSrc} alt={alt} />
        </Container>
      </a>
    </Link>
  );
};

export default GameTile;
