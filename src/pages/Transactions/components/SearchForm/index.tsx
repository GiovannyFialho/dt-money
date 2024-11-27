import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  ContainerField,
  ErrorText,
  SearchFormContainer
} from "@/pages/Transactions/components/SearchForm/styles";

const searchFormSchema = z.object({
  query: z.string().min(1, "Este campo é obrigatório")
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <ContainerField>
        <input type="text" placeholder="Busque por transações" {...register("query")} />

        <ErrorText>{errors.query?.message}</ErrorText>
      </ContainerField>

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
