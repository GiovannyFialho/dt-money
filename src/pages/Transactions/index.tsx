import { useContextSelector } from "use-context-selector";

import { Header } from "@/components/Header";
import { Summary } from "@/components/Summary";

import { TransactionContext } from "@/contexts/TransactionsContext";

import { dateFormatter, priceFormatter } from "@/utils/formatter";

import { SearchForm } from "@/pages/Transactions/components/SearchForm";

import {
  PriceHitlight,
  TransactionsContainer,
  TransactionsTable
} from "@/pages/Transactions/styles";

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

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
                  <PriceHitlight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHitlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
