import React from "react";
import styled from "styled-components";

const H1 = styled.h1<{ color: string }>`
  color: ${({ color }) => color};
  padding-left: 20px;
`;

const H2 = styled.h2<{ color: string }>`
  color: ${({ color }) => color};
  padding-left: 20px;
`;

const H3 = styled.h3<{ color: string }>`
  color: ${({ color }) => color};
  padding-left: 20px;
`;

const H4 = styled.h4<{ color: string }>`
  color: ${({ color }) => color};
  padding-left: 20px;
`;

const H5 = styled.h5<{ color: string }>`
  color: ${({ color }) => color};
  padding-left: 20px;
`;

const H6 = styled.h6<{ color: string }>`
  color: ${({ color }) => color};
  padding-left: 20px;
`;

export interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  color: string;
}

const HeadingMap = { 1: H1, 2: H2, 3: H3, 4: H4, 5: H4, 6: H6 };

export const Heading = ({
  children,
  level,
  color,
}: HeadingProps): JSX.Element => {
  const Component = HeadingMap[level];

  return <Component color={color}>{children}</Component>;
};

export default Heading;
