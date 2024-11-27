import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";

import { TransactionProvider } from "@/contexts/TransactionsContext";

import { Transactions } from "@/pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  );
}
