import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

import { api } from "@/lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  category: string;
  price: number;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionContextType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  /*
   * Ao utilizar o useCallback, podemos controlar quando uma função será recriada.
   * No uso deste provider (fetchTransactions e createTransaction) o array de dependencias
   * está vazio, portanto iremos criar as duas função apenas uma vez.
   * Mas se quiseremos recriar as funções com base em alguma informação de dentro do Provider,
   * deveremos passar essa informação para o array de dependencias, assim a função será recriada.
   */

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query
      }
    });

    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(async (data: CreateTransactionInput) => {
    const { description, category, price, type } = data;

    const response = await api.post("transactions", {
      description,
      category,
      price,
      type,
      createdAt: new Date()
    });

    setTransactions((prev) => [response.data, ...prev]);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
