import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  padding: 0 calc(3.5vw + 5px);
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.a`
  padding: 0;
  width: 240px;
  margin-top: 4px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 640px) {
    width: 200px;
  }
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.div`
  color: #fff;
  margin-right: 30px;
  cursor: pointer;
  font-size: 16px;
  @media (max-width: 640px) {
    display: none;
  }
`;
const Icon = styled.i`
  color: #fff;
`;

const NavLinkContainer = styled.div`
  display: flex;
  opacity: 1;
  &:hover {
    opacity: 0.5;
    transition: opacity 0.2s ease 0s;
  }
`;

export function Header() {
  return (
    <Nav>
      <Link href="/">
        <Logo>
          <img src="https://media.graphassets.com/o9BzNGBZT1iFi9IyRuOM" />
        </Logo>
      </Link>
      <NavLinks>
        <Link href="/">
          <NavLinkContainer>
            <Icon className="bi bi-house-door-fill"></Icon>
            <NavLink>HOME</NavLink>
          </NavLinkContainer>
        </Link>
        <Link href="/search">
          <NavLinkContainer>
            <Icon className="bi bi-search"></Icon>
            <NavLink>SEARCH</NavLink>
          </NavLinkContainer>
        </Link>
      </NavLinks>
    </Nav>
  );
}

export default Header;
