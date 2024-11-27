import { useContext } from "react";

import { TransactionContext } from "@/contexts/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.icome += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    { icome: 0, outcome: 0, total: 0 }
  );

  return summary;
}
