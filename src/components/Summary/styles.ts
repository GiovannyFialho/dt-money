import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin: -5rem auto 0;
  padding: 0 1.5rem;
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme["gray-600"]};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    font-size: 2rem;
    margin-top: 1rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}
`;
