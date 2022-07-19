import styled from "styled-components";

const StyledParagraph = styled.p<{ color: string }>`
  color: ${({ color }) => color};
`;

export interface ParagraphProps {
  children: React.ReactNode;
  color: string;
}

export const Paragraph = ({ children, color }: ParagraphProps): JSX.Element => {
  return <StyledParagraph color={color}>{children}</StyledParagraph>;
};

export default Paragraph;
