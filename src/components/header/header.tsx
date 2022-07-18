import Link from "next/link";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface HeaderProps {}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  padding: 0 calc(3.5vw + 5px);
`;

const Logo = styled.a`
  padding: 0;
  width: 280px;
  margin-top: 4px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    object-fit: contain;
  }
`;

export function Header(props: HeaderProps) {
  return (
    <Nav>
      <Link href="/">
        <Logo>
          <img src="https://media.graphassets.com/sEW3TFSxTgqLrxBZfyLt" />
        </Logo>
      </Link>
    </Nav>
  );
}

export default Header;
