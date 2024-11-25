import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${(props) => props.theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const NewTransationButton = styled.button`
  cursor: pointer;
  height: 50px;

  font-weight: 700;
  color: ${(props) => props.theme.white};

  padding: 0 1.25rem;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme["green-500"]};

  &:hover {
    background: ${(props) => props.theme["gray-700"]};
    transition: all 0.2s ease-in-out;
  }
`;
