import { useContextSelector } from "use-context-selector";

import { TransactionContext } from "@/contexts/TransactionsContext";
import { useMemo } from "react";

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

  /*
   * Ao usar o useMemo, verificamos se precisamos recriar uma variável.
   * No exemplo abaixo, só iremos recriar o "summary" caso haja uma mudança
   * em "transactions". Dessa maneira, não causamos um efeito cascata de
   * renderizar componentes desnecessariamente.
   */

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions]);

  return summary;
}
