import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles.";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "../newTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
