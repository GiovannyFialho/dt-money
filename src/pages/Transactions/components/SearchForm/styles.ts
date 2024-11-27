import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    width: 100%;
    height: 55px;

    color: ${(props) => props.theme["gray-300"]};

    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["gray-900"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    cursor: pointer;
    height: 55px;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-weight: 700;
    color: ${(props) => props.theme["green-300"]};

    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme["green-500"]};
      background: ${(props) => props.theme["green-500"]};

      transition: all 0.2s ease-in-out;
    }
  }
`;

export const ContainerField = styled.div`
  flex: 1;
  position: relative;
`;

export const ErrorText = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;

  font-size: 0.75rem;
  line-height: 0;
  color: ${(props) => props.theme["red-300"]};
`;
