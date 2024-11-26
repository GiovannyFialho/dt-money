import * as Dialog from "@radix-ui/react-dialog";

import Logo from "@/assets/images/logoWithText.svg";

import { NewTransactionModal } from "@/components/NewTransactionModal";

import {
  HeaderContainer,
  HeaderContent,
  NewTransationButton
} from "@/components/Header/styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton type="button">Nova transação</NewTransationButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
