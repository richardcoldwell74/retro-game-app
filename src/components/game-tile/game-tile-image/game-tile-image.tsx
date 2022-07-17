import styled from "styled-components";

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  position: relative;
  height: unset;
`;

export interface GameTileImageProps {
  imageSrc: string;
  alt: string;
}

export const GameTileImage = ({ imageSrc, alt }: GameTileImageProps) => {
  return <Image src={imageSrc} alt={alt}></Image>;
};
