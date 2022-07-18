import styled from "styled-components";

/* eslint-disable-next-line */
export interface HeroBannerProps {
  imageSrc: string;
  alt: string;
}

const HeroImage = styled.img`
  object-fit: contain;
  width: 100%;
  position: relative;
  height: unset;
`;

export function HeroBanner({ imageSrc, alt }: HeroBannerProps) {
  return <HeroImage src={imageSrc} alt={alt} />;
}

export default HeroBanner;
