import { RadioBox } from "../../components/RadioBox";
import { ImageBox } from "../../components/ImageBox";
import { Plans } from "../../components/Plans";
import { Footer } from "../../components/Footer";
import { InfoUser } from "../../components/InfoUser";
import { Button } from "../../components/Button";

import styles from "./styles.module.scss";

import Kiwi from "../../assets/kiwi-fruit 1.svg";
import Uorange from "../../assets/U-Orange.svg";
import brocolis from "../../assets/fresh-raw-broccoli.svg";
import touca from "../../assets/Vector.svg";
import porco from "../../assets/porco.svg";
import mamadeira from "../../assets/Mamadeira.svg";
import halter from "../../assets/Halter.svg";
import elipse from "../../assets/Ellipse 6.svg";
import fruitsLeft from "../../assets/Fruits-left.svg";
import fruitsRight from "../../assets/Fruits-right.svg"; 
import u from "../../assets/U.svg";
import figFruit from "../../assets/fig-fruits-isolated-on-white-background-top-view.svg";
import hazel from "../../assets/hazelnuts-and-caramel-sauce.svg";
import mush from "../../assets/mushrooms-on-white-background.svg";
import tomatoes from "../../assets/fresh-tomatoes-on-white-background-top-view-BVTWL2Z 2.svg";
import healthy from "../../assets/healthy-food-ingredients.svg";

export function Home() {
  
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div>
          <h1>Planejamos<br />
            tudo para você!
          </h1>
          <Button title="Começar agora" />
        </div>
        <div className={styles.areaImages}>
          <div className={styles.Uorange}>
            <img src={Uorange} alt="imagem da letra u" />
          </div>
          <div className={styles.kiwi}>
            <img src={Kiwi} alt="imagem de um kiwi" />
          </div>
        </div>
      </section>

      <form>
        <InfoUser />
        <div className={styles.containerSelect}>
          <h3>Qual é o seu<br />objetivo principal?</h3>
          <div>
            <select id="goal" name="goal">
              <option value="emagrecer">Emagrecer</option>
              <option value="manter peso">Manter peso</option>
              <option value="ganhar saude">Ganhar saúde</option>
              <option value="ganhar massa muscular">Ganhar massa muscular</option>
            </select>
          </div>
        </div>

        <div className={styles.containerGoal}>
          <img src={u} alt="u invertido" />
          <h3>Qual tipo de dieta<br />você gostaria?</h3>
          <div className={styles.grid}>
            <div>
              <ImageBox src={brocolis} name="brocolis" />
              <RadioBox name="goal" label="Equilibrada"/>
            </div>
            <div>
              <ImageBox src={brocolis} name="brocolis" />
              <RadioBox name="goal" label="Paleolítica"/>
            </div>
            <div>
              <ImageBox src={brocolis} name="brocolis" />
              <RadioBox name="goal"label="Cetogênica"/>
            </div>
            <div>
              <ImageBox src={brocolis} name="brocolis" />
              <RadioBox name="goal" label="Vegetariana" />
            </div>
            <div>
              <ImageBox src={brocolis} name="brocolis" />
              <RadioBox name="goal" label="Jejum" />
            </div>
            <div>
              <ImageBox src={brocolis} name="brocolis" />
              <RadioBox name="goal" label="Sem Lactose" />
            </div>
            <div>
              <ImageBox src={brocolis} name="brocolis" />
              <RadioBox name="goal" label="Vegana" />
            </div>
            <div>
              <ImageBox src={brocolis} name="brocolis" />
              <RadioBox name="goal" label="Low Carb" />
            </div>
            <div>
              <ImageBox src={brocolis} name="brocolis" />
              <RadioBox name="goal" label="Com Lactose" />
            </div>
          </div>
          <img src={figFruit} alt="frutas" />
          <img src={hazel} alt="fruta" />
        </div>

        <div className={styles.containerSelect}>
          <h3>Quantas refeições<br />você faz ao dia?</h3>
          <div>
            <select id="meals" name="meals">
              <option value="2">02 Refeições</option>
              <option value="3">03 Refeições</option>
              <option value="4">04 Refeições</option>
              <option value="5">05 Refeições</option>
            </select>
          </div>
        </div>
        <div className={styles.containerRestriction}>
          <img src={mush} alt="mush" />
          <img src={tomatoes} alt="tomate" />
          <h3>Você tem alguma<br />restrição alimentar?</h3>
          <div>
            <section>
              <RadioBox name="restriction" label="Glúten"/>
              <RadioBox name="restriction" label="Amendoim"/>
              <RadioBox name="restriction" label="Ovos"/>
              <RadioBox name="restriction" label="Peixe"/>
              <RadioBox name="restriction" label="Leite"/>
              <RadioBox name="restriction" label="Soja"/>
              <RadioBox name="restriction" label="Mariscos"/>
              <RadioBox name="restriction" label="Porco"/>
              <RadioBox name="restriction" label="Bacon"/>
              <RadioBox name="restriction" label="Tomate"/>
              <RadioBox name="restriction" label="Lecuminosas"/>
              <RadioBox name="restriction" label="Laticínios"/>
            </section>
            <div className={styles.inputPersonalRestriction}>
              <p>Adicione suas prórpias restrições</p>
              <div>
                <input type="text" placeholder="Digite aqui..."/>
                <Button title="Enviar"/>
              </div>
            </div>
          </div>
          <img src={healthy} alt="alimentos saudaveis" />
        </div>

        <div className={styles.infoDiet}>
          <h3>Nível de dificuldade<br />da dieta:</h3>
          <div>
            <RadioBox name="dietDifficulty" label="Sem nenhum preparo"/>
            <RadioBox name="dietDifficulty" label="Com preparos rápidos"/>
            <RadioBox name="dietDifficulty" label="Gosto de cozinhar"/>
          </div>
          <img src={touca} alt="touca de culinária" />
        </div>

        <div className={styles.infoDiet}>
          <h3>Investimento<br />na dieta:</h3>
          <div>
            <RadioBox name="dietEconomy" label="Econômica"/>
            <RadioBox name="dietEconomy" label="Moderadamente econômica"/>
            <RadioBox name="dietEconomy" label="O que for melhor para mim"/>
          </div>
          <img src={porco} alt="imagem de um porco" />
        </div>

        <div className={styles.infoDiet}>
          <h3>Gostaria de utilizar<br />suplementos esportivos?</h3>
          <div>
            <RadioBox name="supplements" label="Sim"/>
            <RadioBox name="supplements" label="Não"/>
          </div>
          <img src={mamadeira} alt="imagem de uma mamadeira" />
        </div>

        <div className={styles.infoDiet}>
          <h3>Você pratica<br />exercícios físicos?</h3>
          <div>
            <RadioBox name="supplements" label="Sim"/>
            <RadioBox name="supplements" label="Não"/>
            <select name="#">
              <option value="#">BMX; MOUNTAIN-BIKE 8,5</option>
            </select>
            <input type="datetime" name="horarioTreino" placeholder="Horário : do : treino"/>
          </div>
          <img src={halter} alt="imagem de um halter" />
        </div>

        <div className={styles.subumit}>
          <h2>Comece agora!</h2>
          <Button title="Clique aqui para ver sua dieta"/>
        </div>
      </form>

      <section className={styles.areaPlans}>
        <div>
          <img src={fruitsLeft} alt="frutas" />
          <Plans />
          <img src={fruitsRight} alt="frutas" />
        </div>
        <img src={elipse} alt="fundo laranja" />
      </section>
      
      <div className={styles.footer}>
        <div></div>
        <Footer />
      </div>
    </main>
  );
}