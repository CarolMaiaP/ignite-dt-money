import {MagnifyingGlass} from 'phosphor-react'

export function SearchForm(){
  return(
    <form>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </form>
  )
}