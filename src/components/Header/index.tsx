import styles from "./styles.module.scss";

import logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="logo minna" />
        <nav>
          <a href="#">Como Fazemos</a>
          <a href="#">Planos e Preços</a>
          <a href="#">Receitas</a>
          <a href="#">Sobre Nós</a>
        </nav>

        <div>
          <button className={styles.sigUp}>Inscreva-se</button>
          <button className={styles.login}>LOGIN</button>
        </div>
      </div>
    </header>
  );
}