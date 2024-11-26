import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  min-width: 32rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2.5rem 3rem;
  border-radius: 6px;
  background: ${(props) => props.theme["gray-800"]};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input {
      color: ${(props) => props.theme["gray-300"]};

      padding: 1rem;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme["gray-900"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      cursor: pointer;
      height: 58px;

      font-weight: 700;
      color: ${(props) => props.theme.white};

      margin-top: 1.5rem;
      padding: 0 1.25rem;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme["green-500"]};

      &:hover {
        background: ${(props) => props.theme["green-700"]};
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  line-height: 0;
  color: ${(props) => props.theme["gray-500"]};

  background: transparent;
  border: 0;
`;
