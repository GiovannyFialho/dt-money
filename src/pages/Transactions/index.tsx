import { Header } from "@/components/Header";
import { Summary } from "@/components/Summary";

import {
  PriceHitlight,
  TransactionsContainer,
  TransactionsTable
} from "@/pages/Transactions/styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHitlight variant="income">R$ 12.000,00</PriceHitlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHitlight variant="outcome">- R$ 59,00</PriceHitlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
