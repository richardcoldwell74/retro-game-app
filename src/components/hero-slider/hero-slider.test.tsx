import { render } from "@testing-library/react";
import "../../../matchMedia.mock"; // Must be imported before the tested file
import HeroSlider from "../hero-slider/hero-slider";

const games = [
  {
    createdAt: "",
    id: "",
    title: "Green Beret",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "green-beret",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/bohnz0MOTGiG39l382Fh" },
    banner: { url: "https://media.graphassets.com/TCRh691TuE9AM58lYygm" },
  },
  {
    createdAt: "",
    id: "",
    title: "Wizball",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "wizball",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/NpGJ3c85Rgq0Y99vDYTs" },
    banner: { url: "https://media.graphassets.com/LH7k4CXiRbu4DTXFsagm" },
  },
  {
    createdAt: "",
    id: "",
    title: "Exolon",
    publisher: "",
    yearPublished: "",
    description: "",
    favourite: false,
    slug: "exolon",
    tags: [],
    heroCarousel: true,
    thumbnail: { url: "https://media.graphassets.com/71XLiXVS1fQaPDlSV1Bw" },
    banner: { url: "https://media.graphassets.com/255s4DOSAWi9DYsl7tzP" },
  },
];

describe("HeroSlider", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<HeroSlider games={games} />);
    expect(baseElement).toBeTruthy();
  });
});
