import logoImg from '../../assets/logo.svg'

export function Header(){
  return(
    <div className="container">
      <header>
        <img src={logoImg} alt="" />
        <button>Nova transação</button>
      </header>
    </div>
  )
}