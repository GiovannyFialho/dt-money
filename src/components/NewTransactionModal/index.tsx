import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { TransactionContext } from "@/contexts/TransactionsContext";

import {
  CloseButton,
  ContainerField,
  Content,
  ErrorText,
  Overlay,
  TransactionType,
  TransactionTypeButton
} from "@/components/NewTransactionModal/styles";

const newTransactionFormSchema = z.object({
  description: z.string().min(1, "Este campo é obrigatório"),
  price: z.number().min(1, "Este campo é obrigatório"),
  category: z.string().min(1, "Este campo é obrigatório"),
  type: z.enum(["income", "outcome"])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionContext);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    createTransaction(data);

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <ContainerField>
            <input type="text" placeholder="Descrição" {...register("description")} />

            <ErrorText>{errors.description?.message}</ErrorText>
          </ContainerField>

          <ContainerField>
            <input
              type="number"
              placeholder="Preço"
              {...register("price", { valueAsNumber: true })}
            />

            <ErrorText>{errors.price?.message}</ErrorText>
          </ContainerField>

          <ContainerField>
            <input type="text" placeholder="Categoria" {...register("category")} />
            <ErrorText>{errors.category?.message}</ErrorText>
          </ContainerField>

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType onValueChange={field.onChange} value={field.value}>
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} /> Entrada
                </TransactionTypeButton>

                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} /> Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
