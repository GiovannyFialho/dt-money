import Logo from "@/assets/images/logoWithText.svg";

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

        <NewTransationButton type="button">Nova transação</NewTransationButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
