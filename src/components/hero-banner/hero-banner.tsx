import styled from "styled-components";

/* eslint-disable-next-line */
export interface HeroBannerProps {
  imageSrc: string;
  alt: string;
}

const HeroImage = styled.img`
  margin-top: 20px;
  object-fit: contain;
  width: 100%;
  height: unset;
`;

export function HeroBanner({ imageSrc, alt }: HeroBannerProps) {
  return <HeroImage src={imageSrc} alt={alt} />;
}

export default HeroBanner;
