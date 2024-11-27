import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { defaultTheme } from "@/styles/themes/default";

import { priceFormatter } from "@/utils/formatter";

import { useSummary } from "@/hooks/useSummary";

import { SummaryCard, SummaryContainer } from "@/components/Summary/styles";

export function Summary() {
  const { icome, outcome, total } = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color={defaultTheme["green-300"]} />
        </header>

        <strong>{priceFormatter.format(icome)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color={defaultTheme["red-300"]} />
        </header>

        <strong>{priceFormatter.format(outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color={defaultTheme.white} />
        </header>

        <strong>{priceFormatter.format(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
