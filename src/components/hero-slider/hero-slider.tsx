import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { Game } from "../../types/game";

const Carousel = styled(Slider)`
  margin-top: 20px;
  margin-bottom: 50px;
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

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    border: 4px solid rgba(49, 49, 49, 0.8);
    transition-duration: 300ms;
    margin: 4px;
    img {
      object-fit: contain;
      width: 100%;
      position: relative;
      height: unset;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export interface HeroSliderProps {
  games: Game[];
}

export function HeroSlider({ games }: HeroSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };
  return (
    <Carousel {...settings}>
      {games.map((slide, index) => {
        return (
          <Wrap key={index}>
            <Link href={"game/" + slide.slug}>
              <a>
                <img src={slide.banner.url} alt={slide.title} />
              </a>
            </Link>
          </Wrap>
        );
      })}
    </Carousel>
  );
}
