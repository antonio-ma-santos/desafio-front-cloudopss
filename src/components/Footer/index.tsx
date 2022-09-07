import styles from "./styles.module.scss";

import { Button } from "../Button";

import logo from "../../assets/Logo-footer.svg";
import insta from "../../assets/Instagran.svg";
import linkdin from "../../assets/Linkdin.svg";
import face from "../../assets/Facebook.svg";
import youtube from "../../assets/Youtube.svg";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <div>
          <img src={logo} alt="logo" />
          <div>
            <a href="#"><img src={insta} alt="instagran" /></a>
            <a href="#"><img src={linkdin} alt="linkdin" /></a>
            <a href="#"><img src={face} alt="facebook" /></a>
            <a href="#"><img src={youtube} alt="Youtube" /></a>
          </div>
        </div>

        <section>
          <div>
            <p>Institucional</p>
            <p><a href="#">Sobre nós</a></p>
            <p><a href="#">Planos</a></p>
            <p><a href="#">Receitas</a></p>
            <p><a href="#">Fale conosco</a></p>
          </div>

          <div>
            <p>Links Úteis</p>
            <p><a href="#">Portal de privacidade</a></p>
            <p><a href="#">Configurações de cookies</a></p>
          </div>

          <div>
            <p>Contatos</p>
            <p>(48) 99999 9999</p>
            <p>contato@contato.com</p>
            <p>R. Lorem Impsun, 999 - Criciúma</p>
            <p>93000-00</p>
          </div>
        </section>

        <Button title="Inscreva-se"/>
      </div>
    </footer>
  );
}