import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as z from "zod";

import { TransactionContext } from "@/contexts/TransactionsContext";

import { SearchFormContainer } from "@/pages/Transactions/components/SearchForm/styles";
import { memo } from "react";

/*
 * Renderização de componentes REACT
  - Por que um componente renderiza? Por pelo menos 3 motivos:
    - Hooks changed (mudou estado, contexto, reducer)
    - Props changed (mudou propriedades)
    - Parent rerendered (componente pai renderizou)

  - Fluxo de renderização de TODOS os componentes React:
    - 1. O React recria o HTML da interface daquele componente
    - 2. Compara a versão do HTML recriado com a versão anterior
    - 3. SE mudou algo, ele vai permitir a nova renderização

* MEMO - uso
  * Quando se o usa o MEMO vamos observar esses 3 motivos.
  * Caso seja verdade, irá seguir o processo normal de renderização de componentes React.
  * Vamos deixar o MEMO nesse componente a título de exemplo,
  * mas ele só é útil em componentes muito complexos que são custozos de fazer a renderização
  * padrão que temos listadas no passo 3 acima.
  - O MEMO irá verificar 3 motivos para permitir a renderização:
    - 0. Hooks changed, Props changed (deep comparision)
    - 0.1 Comparar a versão anterior dos Hooks e Propriedades
    - 0.2 SE mudou algo, ele vai permitir a nova renderização
 */

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(TransactionContext, (context) => {
    return context.fetchTransactions;
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register("query")} />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

export const SearchForm = memo(SearchFormComponent);
