import { useContext } from "react";

import { Header } from "@/components/Header";
import { Summary } from "@/components/Summary";

import { SearchForm } from "@/pages/Transactions/components/SearchForm";

import { TransactionContext } from "@/contexts/TransactionsContext";

import {
  PriceHitlight,
  TransactionsContainer,
  TransactionsTable
} from "@/pages/Transactions/styles";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHitlight variant={transaction.type}>{transaction.price}</PriceHitlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
