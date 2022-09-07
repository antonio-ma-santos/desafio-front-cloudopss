import styles from "./styles.module.scss";

export function InfoUser() {
  return (
    <div className={styles.container}>
      <div>
        <h3>Olá!<br />
          Precisamos conhecer<br />
          um pouco sobre você:
        </h3>
      </div>
      <div className={styles.form}>
        <div className={styles.gender}>
          <div>
            <input id="masculine" type="radio" name="gender" />
            <label htmlFor="masculine">Homem</label>
          </div>
          <div>
            <input id="feminine" type="radio" name="gender" checked/>
            <label htmlFor="feminine">Mulher</label> 
          </div>
        </div>

        <div className={styles.groupBox}>
          <div className={styles.inputBox}>
            <label htmlFor="firstName">Nome</label>
            <input type="text" name="firstName" id="firstName" placeholder="Nome" />
          </div>

          <div className={styles.inputBox}>
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" name="lastName" id="lastName" placeholder="Sobrenome" />
          </div>
        </div>

        <div className={styles.borth}>
          <label htmlFor="birth">Nascimento</label>
          <input type="date" name="birth" id="birth" />
        </div>

        <div className={styles.groupBox}>
          <div className={styles.inputBox}>
            <label htmlFor="weight">Peso</label>
            <input type="number" name="weight" id="weight" min={1} placeholder="55Kg"/>
          </div>

          <div className={styles.inputBox}>
            <label htmlFor="height">Altura</label>
            <input type="number" name="height" id="height" min={1} placeholder="1,67m"/>
          </div>
        </div>

        <div className={styles.fat}>
          <label htmlFor="fat">Nível de gordura corporal</label>
          <select id="fat" name="fat">
            <option value="Moderado">Moderado (22 a 33%)</option>
            <option value="Moderado">Moderado (22 a 33%)</option>
            <option value="Moderado">Moderado (22 a 33%)</option>
          </select>
        </div>
      </div>
    </div>
  );
}