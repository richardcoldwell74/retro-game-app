import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GameTile } from "../game-tile/game-tile";

type Game = {
  createdAt: string;
  id: string;
  title: string;
  publisher: string;
  yearPublished: string;
  description: string;
  favourite: boolean;
  slug: string;
  tags: string[];
  heroCarousel: boolean;
  thumbnail: {
    url: string;
  };
  banner: {
    url: string;
  };
};

const Carousel = styled(Slider)`
  margin-top: 0px;
  margin-bottom: 30px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 20px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -60px;
  }
  .slick-next {
    right: -60px;
  }
`;

/* eslint-disable-next-line */
export interface GameSectionSliderProps {
  games: Game[];
}

export function GameSectionSlider({ games }: GameSectionSliderProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    pauseOnHover: true,
  };
  return (
    <Carousel {...settings}>
      {games.map((slide, index) => {
        return (
          <GameTile
            href={"game/" + slide.slug}
            key={index}
            imageSrc={slide.thumbnail.url}
            alt={slide.title}
          />
        );
      })}
    </Carousel>
  );
}

export default GameSectionSlider;
