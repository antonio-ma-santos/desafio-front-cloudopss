import styles from "./styles.module.scss";

import { Plan } from "../Plan";
import { Button } from "../Button";

export function Plans() {
  const desciptionPlan = "Este plano é para pessoas residentes no mesmo endereço. Os planos e as listas de compras serão feitas para auxiliar nos objetivos de cada pessoa e facilitar a rotina da casa.";

  return (
    <section className={styles.container}>
       <h2>Conheça nossos planos</h2>
       <div>
          <Plan 
            title="Plano individual"  
            price="19,90"
            description={desciptionPlan} 
          />
          <Plan 
            title="Plano casal"  
            price="24,90"
            description={desciptionPlan} 
          />
          <Plan 
            title="Plano famíliar"  
            subTitle="(4 pessoas)"
            price="43,90"
            description={desciptionPlan} 
          />
       </div>
       <div>
         <p>Receba conteúdos exclusívos!</p>
         <div>
          <input type="text" />
          <Button title="Enviar"/>
         </div>
       </div>
    </section>
  );
}