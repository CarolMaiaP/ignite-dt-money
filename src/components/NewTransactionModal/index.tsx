import * as Dialog from '@radix-ui/react-dialog'

export function NewTransactionModal(){
  return(
    <Dialog.Portal>
      <Dialog.Overlay />

      <Dialog.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <form action="">
          <input type="text" placeholder='Descrição' required />
          <input type="number" placeholder='Preço' required />
          <input type="text" placeholder='Categoria' required />

          <button type="submit">
            Cadastrar
          </button>
        </form>

        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  )
}