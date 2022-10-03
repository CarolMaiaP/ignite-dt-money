import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContainer } from "./styles";

export function Transactions(){
  return(
    <div>
      <Header/>
      <Summary/>

      <div>
        <table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hambúrguer</td>
              <td>- R$ 50,00</td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}